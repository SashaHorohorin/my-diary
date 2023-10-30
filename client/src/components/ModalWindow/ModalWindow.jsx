import React, { useState } from "react";
import "./ModalWindow.scss";
import Input from "./Input/Input";

const ModalWindow = ({ flagModal, setFlagModal, fetchingCreatePosts }) => {
    const [flagTitle, setFlagTitle] = useState(false)
    const [flagNote, setFlagNote] = useState(false)
    const [flagDatetime, setFlagDatetime] = useState(false)

    const [obj, setObj] = useState({
        title: "",
        note: "",
        datetime: "",
    });
    const handlerSubmit = (event) => {
        event.preventDefault();
    };
    const send = () => {
        // console.log(obj);
        
        if (!obj.title){
            setFlagTitle(true)
        }
        else{
            setFlagTitle(false)
        }
        if (!obj.note){
            setFlagNote(true)
        }else{
            setFlagNote(false)
        }
        if (!obj.datetime){
            setFlagDatetime(true)
        }else{
            setFlagDatetime(false)
        }

        if(obj.title && obj.note && obj.datetime){
            fetchingCreatePosts(obj)
            setFlagModal(false)
            setObj(
                {
                    title: '',
                    note: '',
                    datetime: ''
                }
            )
        }
        
        
        
    }
    return (
        <div className={flagModal ? "bg active" : "bg"}>
            <div className="modal">
                <div
                    onClick={() => setFlagModal(false)}
                    className="modal__close"
                >
                    <img src="/img/close-modal.svg" alt="" />
                </div>
                <div className="modal__header header-modal">
                    <div className="header-modal__title">Новая запись</div>
                </div>
                <form onSubmit={handlerSubmit} className="modal__form form">
                    <div className="form__row">
                        <div className="form__column">
                            <Input
                                label="Заголовок"
                                placeholder="Заголовок"
                                id="title"
                                type="text"
                                name="title"
                                setObj={setObj}
                                obj={obj}
                                flagTitle={flagTitle}
                            />
                        </div>
                        <div className="form__column">
                            <Input
                                label="Дата"
                                id="datetime"
                                type="text"
                                name="datetime"
                                placeholder="30.10.2023 12:00"
                                setObj={setObj}
                                obj={obj}
                                
                                flagDatetime={flagDatetime}
                            />
                        </div>
                    </div>
                    <div className="form__textarea">
                        <Input
                            label="Заметка"
                            placeholder="Ваша заметка"
                            id="note"
                            type="text"
                            name="note"
                            setObj={setObj}
                            obj={obj}
                            flagNote={flagNote}
                        />
                        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                    </div>
                    <button onClick={() => send()} className="form__btn">Поделиться наболевшим</button>
                </form>
            </div>
        </div>
    );
};

export default ModalWindow;
