
import { IMaskInput } from "react-imask";

const Input = ({ name, id, label, setObj, obj, flagTitle, flagNote, flagDatetime,  arg, placeholder }) => {

    const heandlerChange = (event) => {
        let val = event.target.value;
        let name = event.target.name;
        // setValue(val)
        setObj({
            ...obj,
            [name]: val,
        });
    };
    // console.log(flagTitle, flagNote, flagDatetime);
    return (
        <>
            {name === "title" ? (
                <>
                    <label className="form__label" htmlFor={id}>
                        <span>{label}</span>
                        <div className={flagTitle ?  "necessarily active" : "necessarily"}>
                            <img src="/img/warning-input.svg" alt="" />
                            <p className="necessarily__text">
                                Обязательное поле
                            </p>
                        </div>
                        <p className="error">Ошибка ввода</p>
                    </label>
                    <input
                        id={id}
                        value={obj[name]}
                        className={flagTitle ?  "form__input warning" : "form__input"}
                        onChange={(event) => heandlerChange(event)}
                        name={name}
                        placeholder={placeholder}
                        {...arg}
                    />
                </>
            ) : name === "datetime" ? (
                <>
                    <label className="form__label" htmlFor={id}>
                        <span>{label}</span>
                        <div className={flagDatetime ?  "necessarily active" : "necessarily"}>
                            <img src="/img/warning-input.svg" alt="" />
                            <p className="necessarily__text">
                                Обязательное поле
                            </p>
                        </div>
                        <p className="error">Ошибка ввода</p>
                    </label>
                    <IMaskInput
                        mask="00.00.0000 00:00"
                        definitions={{
                            "#": /[1-9]/,
                        }}
                        id={id}
                        onChange={(event) => heandlerChange(event)}
                        value={obj[name]}
                        placeholder={placeholder}
                        name={name}
                        className={flagDatetime ?  "form__input warning" : "form__input"}
                        {...arg}
                        // onAccept={(value, mask) => console.log(value, mask)}
                    />
                </>
            ) : (
                <>
                    <label className="form__label" htmlFor={id}>
                        <span>{label}</span>
                        <div className={flagNote ?  "necessarily active" : "necessarily"}>
                            <img src="/img/warning-input.svg" alt="" />
                            <p className="necessarily__text">
                                Обязательное поле
                            </p>
                        </div>
                        <p className="error">Ошибка ввода</p>
                    </label>

                    <textarea
                        id={id}
                        value={obj[name]}
                        placeholder={placeholder}
                        onChange={(event) => heandlerChange(event)}
                        className={flagNote ?  "form__input warning" : "form__input"}
                        name={name}
                        {...arg}
                    />
                </>
            )}
        </>
    );
};

export default Input;
