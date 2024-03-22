
function ChildEvent() {
    function eventOne(){
        console.log("You just have hit the button 1")
    }
    function eventTwo(){
        console.log("Mouse was over the button 2");
    }
  return (
    <div>
        <div>
            <h1>Excercise one: Event Handling </h1>
        </div>
        <button onClick={eventOne}>
            Button One
        </button>
        <button onMouseOver={eventTwo}>
            Button Two
        </button>
    </div>
  )
}

export default ChildEvent