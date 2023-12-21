// Write your code here

import {useState} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const [searchInput, setSearchInput] = useState('')
  const [tourismList, setTourismList] = useState(destinationsList)

  const changeInput = event => {
    setSearchInput(event.target.value)
    console.log(searchInput)
  }
  const resultList = tourismList.filter(each =>
    each.name.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="container">
      <div className="sub-container">
        <h1 className="head">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            value={searchInput}
            onChange={changeInput}
            className="search-input"
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-image"
          />
        </div>
      </div>
      <ul className="ul-list">
        {resultList.map(each => (
          <DestinationItem data={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}
export default DestinationSearch
