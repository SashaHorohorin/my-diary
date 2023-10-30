import React, { useEffect, useState } from "react";
import "./Pagination.scss";

const Pagination = ({totalPages, setCountPage, countPage}) => {
    const [pogination, setPogination] = useState([])

    // console.log(totalPages);
    const createNumberArr = () => {
        let arr = []
        for(let i = 1; i <= totalPages; i++){
            arr.push(i)
        }

        setPogination(arr)
    }
    useEffect(() => {
        createNumberArr();
    }, [totalPages])

    const plusCount = () => {
        if(totalPages !== countPage){
            setCountPage(countPage + 1)
        }
    }
    const minusCount = () => {
        if(1 !== countPage){
            setCountPage(countPage - 1)
        }
    }
    
    return (
        <div className="content__navigate">
            <div className="navigate">
                <div onClick={minusCount} className="navigate__arrow">
                    <img src="/img/arrow.svg" alt="" />
                </div>
                <div className="navigate__pagination">
                    {pogination.map((p, index) => (
                        <span className={countPage === p ? 'active' : ''} onClick={() => setCountPage(p)} key={index}>{p}</span>
                    ))}
                </div>
                <div onClick={plusCount} className="navigate__arrow">
                    <img src="/img/arrow.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Pagination;
