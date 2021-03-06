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
    const urlPath = window.location.pathname;
    const restaurantId = /\d/.test(urlPath) ? urlPath.split('/').filter((str) => !isNaN(parseInt(str)))[0] : '0';
    restaurantId !== '0' ? this.getData(restaurantId) : this.setState(this.props.initialState);
  }

  changeState(newKeyVals) {
    const state = Object.assign({}, this.state);
    for (const key in newKeyVals) {
      state[key] = newKeyVals[key];
    }
    this.setState(state);
  }

  getData(restaurantId) {
    $.get({
      url: `/restaurants/${restaurantId}/reviews`,
    })
      .done((data) => {
        const { summary, reviews } = JSON.parse(data);
        this.setState({ restaurantId, summary, reviews });
      })
      .fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
      });
  }

  render() {
    return (
      <div id="reviews">
        <Summary summary={this.state.summary} />
        <Feed reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
