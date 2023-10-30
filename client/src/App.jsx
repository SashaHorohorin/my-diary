import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import DataService from "./API/DataService";
import { useFetching } from "./hooks/useFetching";

function App() {
    const [flagModal, setFlagModal] = useState(false);
    const [posts, setPosts] = useState([]);

    const [fetchingCreatePosts, isLoadingCreatePosts, errorCreatePosts] =
        useFetching(async (obj) => {
            const response = await DataService.postCreatePost(obj);
            // console.log(response.data);
            setPosts((current) => {
                // console.log(current);
                return [...current, response.data];
            });

            console.log(response.data);
        });
    return (
        <div className="App">
            <div className="container">
                <ModalWindow
                    fetchingCreatePosts={fetchingCreatePosts}
                    flagModal={flagModal}
                    setFlagModal={setFlagModal}
                />
                <Header setFlagModal={setFlagModal} />
                <Content createPosts={posts} />
                <Footer />
            </div>
        </div>
    );
}

export default App;
