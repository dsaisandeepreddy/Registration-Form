import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    spaceFirstName: true,
    spaceLastName: true,
    anotherResponse: false,
  }

  onresultPage = () => {
    const {anotherResponse} = this.state

    this.setState({anotherResponse: false})
  }

  submitForm = () => {
    const {firstName, lastName, spaceFirstName, spaceLastName} = this.state
    if (firstName === '' || lastName === '') {
      this.setState({
        spaceFirstName: true,
        spaceLastName: true,
        anotherResponse: false,
      })
    }
    this.setState({anotherResponse: true})
  }

  onFirstName = event => {
    this.setState({firstName: event.target.value, spaceFirstName: false})
  }

  onLastName = event => {
    this.setState({lastName: event.target.value, spaceLastName: false})
  }

  loginForm = () => {
    const {firstName, lastName, spaceFirstName, spaceLastName} = this.state

    return (
      <div>
        <h1>Registration</h1>

        <div>
          <label htmlFor={firstName}>FIRST NAME</label>
          <br />
          <input type="text" value={firstName} onChange={this.onFirstName} />
          {spaceFirstName && <p>Required</p>}
        </div>
        <div>
          <label htmlFor={lastName}>LAST NAME</label>
          <br />
          <input type="text" value={lastName} onChange={this.onLastName} />
          {spaceLastName && <p>Required</p>}
        </div>
        <button onClick={this.submitForm} type="submit">
          Submit
        </button>
      </div>
    )
  }

  render() {
    const {anotherResponse} = this.state
    if (anotherResponse === true) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
          />
          <p>Submitted Successfully</p>
          <button type="button" onClick={this.onresultPage}>
            Submit Another Response
          </button>
        </div>
      )
    }
    if (anotherResponse === false) {
      return this.loginForm()
    }

    return this.loginForm()
  }
}

export default RegistrationForm
