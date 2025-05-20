import TodoList from "../components/TodoList";

export default function Sistema() {
  return (
    <div>
      <h2>Task list</h2>
        <p>aqui se escriben las tareas pendientes resultantes de las reuniones de revision
            pueden agregarse, eliminarse o editarse segun la situacion lo requiera.  
        </p>
      <TodoList />
    </div>
  );
}