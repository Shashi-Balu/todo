import "./App.css";
import Clock from "./Clock";
import FormRef from "./FormRef";
import Greet from "./Greet";
import Home from "./Home";
import LifeCycle from "./LifeCycle";
import Rainbow from "./Rainbow";
import SignIn from "./SignIn";
import DetailsForm from "./DetailsForm";
import WithChangeCounter from "./HOC/WithChangeCounter";
import Todo from "./Todo/Todo";

function App() {
    return (
        <div>
            <Todo />
        </div>
        // <div className="App">
        //     {/* <Greet name="Shashi" /> */}
        //     {/* <DetailsForm /> */}
        //     <WithChangeCounter />
        // </div>
    );
}

export default App;
