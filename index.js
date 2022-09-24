function App(){
  // creating state
  const [todos, setTodos] = React.useState([
    {
      // array of objects below
        text: 'Read',
        isCompleted: false,
    },
    {
        text: 'Grocery Shopping',
        isCompleted: false,
    },
    {
        text: 'Pay Bills',
        isCompleted: false,
    },        
    {
      text: 'Walk dog',
      isCompleted: false,
  }        
  ]);

const addTodo = text => {
  const newTodos = [...todos, {text:text, isCompleted:false}];
  setTodos(newTodos);
}

const removeTodo = index => {
  let temp = [...todos];
  temp.splice(index,1);
  setTodos(temp);
}
  return(<>
            <div className="app">
                <div className="todo-list">
                   {todos.map((todo, i) => 
                        <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
                    <TodoForm addTodo={addTodo}/>
                </div>
            </div>
    </>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
