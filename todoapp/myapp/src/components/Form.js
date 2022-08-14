export default function Form({onChange,onClickbtn,inputText,inputref, onFilter}) {


  return (
    <div>
      <form >
        <input value={inputText} type="text" className="todo-input" onChange={onChange} ref={inputref}/>
        <button className="todo-button" type="submit" onClick={onClickbtn} >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={onFilter} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}
