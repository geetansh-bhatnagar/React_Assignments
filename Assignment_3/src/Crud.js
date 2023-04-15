import { Provider } from "./Context";
import Form from "./Pages/Form";
import UserList from "./Pages/UserList";
import { Actions } from "./Actions";
function Crud() {
    const data = Actions();
    return (
        <Provider value={data}>
            <div className="App1">
                <h1>React JS + PHP CRUD Application</h1>
                <div className="wrapper">
                    <section className="left-side">
                        <Form />
                    </section>
                    <section className="right-side">
                        <UserList />
                    </section>
                </div>
            </div>
        </Provider>
    );
}

export default Crud;