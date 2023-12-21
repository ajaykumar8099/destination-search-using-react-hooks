// Write your code here
import './index.css'

const DestinationItem = props => {
  const {data} = props
  const {name, imgUrl} = data
  return (
    <li className="li-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="para">{name}</p>
    </li>
  )
}
export default DestinationItem
