import React from "react";
import './ItemNote.scss'

const ItemNote = ({post}) => {
    const getDateYear = (date) => {
        let d = new Date(date);
        let time = `${d.getDate() < 10 ? `0${d.getDate() - 1}` : d.getDate() - 1}.${
            d.getMonth() < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
        }.${d.getFullYear()}`;
        return time;
    };
    const getTime = (date) => {
        let d = new Date(date);
        let time = `${d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()}:${
            d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
        }`;
        return time;
    };
    return (
        <div className="notes__item item-note">
            <div className="item-note__title">{post.title}</div>
            <p className="item-note__text">
                {post.note}
            </p>
            <div className="item-note__datatime item-datetime">
                <div className="item-datetime__date">{getDateYear(post.datetime)}</div>
                <div className="item-datetime__time">{getTime(post.datetime)}</div>
            </div>
        </div>
    );
};

export default ItemNote;
