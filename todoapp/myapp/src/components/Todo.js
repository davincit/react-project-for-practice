export default function Todo({ deletbtn, compTask, itm }) {

  return (
    <div className="todo">
      <li className={`${itm.completed ? "do-item" : "todo-item"}`}>{itm.text}</li>
      <button
        className={`${itm.completed ? "btn complete-btn" : "btn notcomplete-btn"} ` }
        onClick={() => compTask(itm)}
      >
        <i
          className={`${itm.completed ? "fa fa-check": "fa fa-times"} ` }
        ></i>
      </button>
      <button className="trash-btn" onClick={() => deletbtn(itm)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}
