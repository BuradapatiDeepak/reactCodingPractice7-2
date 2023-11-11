// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, changePlaceHolder} = props
  const {suggestion} = suggestionsList
  const updatePlaceHolder = () => {
    changePlaceHolder(suggestion)
  }

  return (
    <li className="lists-li">
      <p className="paragraph">{suggestion}</p>
      <img
        onClick={updatePlaceHolder}
        className="arrow"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
