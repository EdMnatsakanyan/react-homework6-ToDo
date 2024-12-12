import { ToDoItem } from "./todo-item"

export const List = ({ todos, onChange,onDelete}) => {
  return (
    <div className="mt-8 max-w-3xl mx-auto">
      {
        todos.map(item => 
          <ToDoItem key={item.id} todo={item} onChange={onChange} onDelete={onDelete}/>
        )
      }
    </div>
  )
}
