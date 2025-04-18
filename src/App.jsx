import Counter from "./Counter"
import MyComponent from "./MyComponent"
import Practice from "./Practice"
import TodoList from "./TodoList"
import DigitalClock from "./DigitalClock"
import ColorPicker from "./ColorPicker"
import StopWatch from "./StopWatch"

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <TodoList />
      <DigitalClock />
      <ColorPicker />
      {/* <MyComponent />
      <Practice /> */}
      <StopWatch />
    </div>
  )
}

export default App
