export const ToDoItem = ({ todo ,onChange, onDelete}) => {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4 hover:bg-gray-700 transition">
        <h2 className="text-xl font-semibold">{todo.name}</h2>
        <h3 className="text-gray-400">{todo.description}</h3>
  
        <div className="mt-4 flex justify-between">
          <button
            onClick={()=>onChange(todo)}
            className={`px-4 py-2 rounded-lg ${todo.completed ? 'bg-red-500' : 'bg-green-500'} text-white hover:bg-opacity-80 focus:outline-none`}
          >
            {todo.completed ? 'Cancel' : 'Complete'}
          </button>
  
          <button
            onClick={()=>onDelete(todo)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
  