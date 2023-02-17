// import { decrement, increment } from "./store/Reducer";
import {useDispatch, useSelector} from 'react-redux';
import { increment, decrement,addTodo,removeLastTodo } from "./store/Slice";
function App() {

  const count = useSelector(state => state.toolkit.count)
  // const todos = useSelector(state=> state.main.todos)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>counter {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decement</button>

    </div>
  );
}

export default App;
