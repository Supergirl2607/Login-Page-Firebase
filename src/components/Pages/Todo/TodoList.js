import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, fb_id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(fb_id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(fb_id);
  }

  const styles =
  {
    backgroundColor: "rgb(38, 160, 231)",
    display: "flex",
    padding: "0.5rem",
    borderBottom: "1 solid #333",
    fontSize: "1.5rem",
    justifyContent: "space-between",
    marginTop: "1rem",
    color: "#fff",
  }

  const myClass = (completed)?"striked": "";
  return (
    
    <li style={styles}>
        <span className={myClass}>{descripcion}</span>
    <div className="flex w-full justify-end items-center">
    <MdDone size={"1.5rem"}  onClick={onClick}></MdDone>
    <MdDelete size={"1.5rem"} onClick={onDeleteClick}></MdDelete>
    </div>
    </li>
    );
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.id}
        descripcion={o.description}
        id={o.id}
        fb_id={o.fb_id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList w-full ">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
