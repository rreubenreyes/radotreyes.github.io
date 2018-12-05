import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class QuadDoors extends Component {
  static propTypes = {
    menuItems: PropTypes.object.isRequired,
  }

  state = { typewriterText: ``, twIntervalId: 0 }

  doors = React.createRef()

  typewriterTarget = React.createRef()

  componentDidMount = () => {
    this.doors.current.addEventListener(`click`, this.handleClick)
  }

  handleClick = () => {
    const doors = this.doors.current
    doors.classList.toggle(`open`)
    doors.classList.toggle(`closed`)
  }

  handleTypewriter = () => {
    const {
      menuItems: { fourth: text },
    } = this.props
    const { twIntervalId } = this.state
    const delay = 100
    function* typewriter(t) {
      /* eslint-disable-next-line */
      for (let char of t) {
        yield char
      }
    }
    const iterator = typewriter(text)
    let tw = iterator.next().value
    const twInterval = setTimeout(
      setInterval(() => {
        if (tw) {
          this.setState(prevState => ({
            typewriterText: prevState.typewriterText + tw,
          }))
          tw = iterator.next().value
        }
      }, delay),
      500,
    )

    this.setState({
      twIntervalId: twInterval,
    })

    setTimeout(() => {
      clearInterval(twIntervalId)
    }, delay * text.length)
  }

  resetTypewriter = () => {
    const { twIntervalId } = this.state
    clearInterval(twIntervalId)
    this.setState({
      typewriterText: ``,
    })
  }

  render() {
    const {
      menuItems: {
        first, second, third, fourth,
      },
    } = this.props
    const { typewriterText } = this.state
    return (
      <div className="quad-doors open" ref={this.doors}>
        <div className="door__first">
          <h1>{first}</h1>
        </div>
        <div className="door__second">
          <h1>{second}</h1>
        </div>
        <div className="door__third">
          <h1>{third}</h1>
        </div>
        <div
          className="door__fourth"
          onMouseEnter={this.handleTypewriter}
          onMouseLeave={this.resetTypewriter}
          onFocusIn={this.handleTypewriter}
          onFocusOut={this.resetTypewriter}
        >
          <h1 ref={this.typewriterTarget}>{typewriterText || fourth}</h1>
        </div>
      </div>
    )
  }
}
