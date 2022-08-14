import Todo from "./Todo";

export default function TodoList({todo, deletbtn, compTask,finalState}) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
     {finalState.map((i)=>(<Todo key={i.id} deletbtn={deletbtn} compTask={compTask} itm={i}/>))}
         
        </ul>
      </div>
    </div>
  )
}
