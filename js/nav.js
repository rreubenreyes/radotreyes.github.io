import * as React from 'react-min'

class Hamburger extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick() {
    this.setState( prevState => ( {
      isToggleOn: !prevState.isToggleOn
    } ) );
  }

  render() {
    return (
      <div onClick={ this.handleClick }>
        { this.state.isToggleOn ? <i className="fa fa-bars" aria-hidden="true"></i> : 'OFF' }
      </div>
    );
  }
}

ReactDOM.render(
  <Hamburger />,
  document.getElementById( 'nav' )
);
