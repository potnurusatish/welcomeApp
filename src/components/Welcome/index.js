import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  OnClickBtn = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const buttonText = isSubscribed ? 'Subscribed' : 'Subscribe'

    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.OnClickBtn}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
