import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClicked }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>

        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onDeleteClicked(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
