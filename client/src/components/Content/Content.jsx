import React, { useEffect, useState } from "react";
import "./Content.scss";
import Pagination from "./Pagination/Pagination";
import ItemNote from "./ItemNote/ItemNote";
import { useFetching } from "../../hooks/useFetching";
import DataService from "../../API/DataService";

const Content = ({createPosts}) => {
    const [posts, setPosts] = useState([]);
    const [countPage, setCountPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [type, setType] = useState('')
    const [flag, setFlag] = useState(false)


    const [fetchingPosts, isLoadingPosts, errorPosts] = useFetching(
        async (pageNum, flag) => {
            const response = await DataService.getAllPost(pageNum, flag);
            // console.log(response.data);
            console.log(pageNum);
            if (type === "more") {
                setPosts((current) => {
                    console.log(current);
                    return [...current, ...response.data.posts];
                });
                setType('')
            }else{
                setPosts(response.data.posts);
            }

            console.log(response.data);
            
            setTotalPages(response.data.pageAll);
        }
    );

    useEffect(() => {
        fetchingPosts(countPage, flag);
    }, [countPage, flag, createPosts]);

    const moreContent = async () => {
        setCountPage(countPage + 1)
        setType('more')
    }

    const newPosts = () => {
        setCountPage(1)
        setFlag(false)
        
    }
    const oldPosts = () => {
        setCountPage(1)
        setFlag(true)
    }

    return (
        <section id='content' className="content">
            <div className="content__header header-content">
                <h1 className="header-content__title">Мой дневничок</h1>
                <div className="header-content__btns btns-header-content">
                    <div onClick={() => newPosts()} className="btns-header-content__btn">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 6H20M4 12H14M4 18H8"
                                stroke="#050F28"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M14 16L18 20M18 20L22 16M18 20L18 4"
                                stroke="#88A1DE"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>Сначала новые</span>
                    </div>
                    <div onClick={() => oldPosts()} className="btns-header-content__btn">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 6H20M4 12H14M4 18H8"
                                stroke="#050F28"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M14 8L18 4M18 4L22 8M18 4L18 20"
                                stroke="#88A1DE"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>Сначала старые</span>
                    </div>
                </div>
            </div>
            <div className="content__diary notes">
                {posts.length !== 0
                    ? posts.map((post) => (
                          <ItemNote key={post.id} post={post} />
                      ))
                    : "Нету заметок"}
            </div>
            <button style={countPage === totalPages ? {display: 'none'} : {display: 'block'}} onClick={() => moreContent()} className="content__show-more">Показать больше</button>
            <Pagination totalPages={totalPages} setCountPage={setCountPage} countPage={countPage}/>
        </section>
    );
};

export default Content;
