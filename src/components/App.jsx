import { Counter } from "./Counter/Counter";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import { TodoList } from "./TodoList/TodoList.jsx";
const App = () => {
  return (
    <>
      <Counter></Counter>
      <ColorPicker></ColorPicker>
      <TodoList></TodoList>
    </>
  );
};
export default App;
