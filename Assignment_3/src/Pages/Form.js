import { useState, useContext } from "react";
import { AppContext } from "../Context";
const Form = () => {
    const { insertUser } = useContext(AppContext);
    const [newUser, setNewUser] = useState({});

    // Storing the Insert User Form Data.
    const addNewUser = (e, field) => {
        setNewUser({
            ...newUser,
            [field]: e.target.value,
        });
    };
    const reloadPage = () => {
        window.location.reload();
    };
    // Inserting a new user into the Database.
    const submitUser = (e) => {
        e.preventDefault();
        insertUser(newUser);
        e.target.reset();
        reloadPage();
    };


    return (
        <form className="insertForm" onSubmit={submitUser}>
            <label htmlFor="_name">Name</label>
            <input
                type="text"
                id="_name"
                onChange={(e) => addNewUser(e, "user_name")}
                placeholder="Enter name"
                autoComplete="off"
                required
            />
            <label htmlFor="_email">Email</label>
            <input
                type="email"
                id="_email"
                onChange={(e) => addNewUser(e, "user_email")}
                placeholder="Enter email"
                autoComplete="off"
                required
            />
            <input type="submit" value="Insert"/>

        </form>
    );
};

export default Form;