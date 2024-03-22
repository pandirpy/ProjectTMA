// import Hello from "./Components/Hello"
// import Cars from "./Components/Cars"
import MultipleInput from "./Components/MultipleInput"
import ChildEvent from "./Components/ChildEvent"
import Cart from "./Components/Cart"
import TodoListApp from "./Components/TodoList"
import HeaderStyle from "./Components/HeaderStyle"
function App() {
  
  return (
    <div className = 'App'>
      
      {/* <Array stationery={stationery}/> */}
      <ChildEvent/>
      <Cart/>
      <MultipleInput/>
      <HeaderStyle/>
      <TodoListApp/>
    </div>
  )
}

export default App
