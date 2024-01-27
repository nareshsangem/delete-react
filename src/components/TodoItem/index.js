// Write your code here
import './index.css'

const TodoItem = props => {
  const {ItemDetails, deleteItem} = props
  const {title, id} = ItemDetails
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="items-list">
      <div className="item">
        <p className="title">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
