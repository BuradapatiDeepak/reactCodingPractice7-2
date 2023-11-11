// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchValue: ''}

  keyWordChange = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  changePlaceHolder = value => {
    this.setState({
      searchValue: value,
    })
  }

  render() {
    const {searchValue} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="container">
          <img
            className="image"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                className="search-icon"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                value={searchValue}
                placeholder="Search Google"
                className="inputElement"
                type="search"
                onChange={this.keyWordChange}
              />
            </div>
            <ul>
              {filteredList.map(eachList => (
                <SuggestionItem
                  changePlaceHolder={this.changePlaceHolder}
                  suggestionsList={eachList}
                  key={eachList.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
