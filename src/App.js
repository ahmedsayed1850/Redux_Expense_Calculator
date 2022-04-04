import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decremenet = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(20));
  };
  return (
    <div className="App">
      <h1>counter</h1>
      <button onClick={decremenet}>-</button>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={addBy}>add By 10</button>
    </div>
  );
}

export default App;
