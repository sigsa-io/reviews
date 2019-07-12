import React from 'react';
import $ from 'jquery';
import Summary from './Summary';
import Feed from './Feed';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.initialState;
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="reviews">
        <Summary summary={this.state.summary} />
        <Feed reviews={this.state.reviews} />
      </div>
    );
  }
};

export default App;
