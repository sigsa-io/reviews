import React from 'react';
import $ from 'jquery';
import Summary from './Summary';
import List from './List';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>REVIEWS</h1>
        <Summary />
        <List />
      </div>
    );
  }
};

export default App;
