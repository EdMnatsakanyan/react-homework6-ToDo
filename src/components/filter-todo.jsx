export const FilterPanel = ({ onSetFilter }) => {
    return (
      <form className="flex justify-center items-center space-x-6 py-4">
        <label className="flex items-center text-white">
          <input
            onChange={() => onSetFilter('all')}
            type="radio"
            name="fil"
            className="form-radio text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <span className="ml-2">All</span>
        </label>
  
        <label className="flex items-center text-white">
          <input
            onChange={() => onSetFilter('completed')}
            type="radio"
            name="fil"
            className="form-radio text-green-600 focus:ring-2 focus:ring-green-500"
          />
          <span className="ml-2">Completed</span>
        </label>
  
        <label className="flex items-center text-white">
          <input
            onChange={() => onSetFilter('active')}
            type="radio"
            name="fil"
            className="form-radio text-yellow-500 focus:ring-2 focus:ring-yellow-400"
          />
          <span className="ml-2">Active</span>
        </label>
      </form>
    )
  }
  