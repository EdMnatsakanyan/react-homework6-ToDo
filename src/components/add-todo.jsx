import axios from "axios"
import { useForm } from "react-hook-form"

export const AddToDo = ({ onAdd }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const handleAdd = data => {
    axios
      .post("http://localhost:3004/todos", data)
      .then(res => {
        onAdd(res.data)
        reset()
      })
  }

  return (
    <form onSubmit={handleSubmit(handleAdd)} className="bg-gray-800 p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <div className="mb-4">
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        <input
          type="text"
          placeholder="ToDo name"
          {...register("name", { required: "Please input a name" })}
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        <input
          type="text"
          placeholder="ToDo description"
          {...register("description", { required: "Please input a description" })}
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add ToDo
      </button>
    </form>
  )
}
