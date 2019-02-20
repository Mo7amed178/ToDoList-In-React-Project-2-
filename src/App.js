import React, { Component } from 'react';
import Sky from './components/sky/sky';
import './App.css';
import Lists from './Lists'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'space',
      background: '#2F3939',
      how: 100,
      items: [],
      text: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      mode: e.target.value,
      how: e.target.attributes.how.value,
      background: e.target.attributes.background.value,
    });
  }
  //--------------------------------

  submitForm(event) {
    event.preventDefault();

    const text = this.state.text
    const addItems = this.state.items.concat(text);

    this.setState({
      items: addItems,
      text: ''
    })
  }

  changeForm(event) {
    const text = event.target.value
    this.setState({
      text: text

    })

  }

  delItem(itemDeleted) {
    const addItems = this.state.items.filter((i) => {
      return i != itemDeleted
    })
    this.setState({ items: addItems })
  }

  // clearAll(clear) {
  //   let c = this.state.items.splice(0);
  //   c.splice(this.state.text)
  //   this.setState({
  //     items: c
  //   })
  // }
  // -----------------
  render() {
    const { mode, background, how } = this.state;
    const modes = {
      space: {
        0: 'https://image.flaticon.com/icons/svg/124/124574.svg',
        1: 'https://image.flaticon.com/icons/svg/124/124570.svg',
        2: 'https://image.flaticon.com/icons/svg/124/124567.svg',
        3: 'https://image.flaticon.com/icons/svg/124/124560.svg',
        4: 'https://image.flaticon.com/icons/svg/124/124559.svg',
        5: 'https://image.flaticon.com/icons/svg/124/124582.svg',
        6: 'https://image.flaticon.com/icons/svg/124/124558.svg',
        7: 'https://image.flaticon.com/icons/svg/124/124588.svg',
        8: 'https://image.flaticon.com/icons/svg/124/124542.svg',
        9: 'https://image.flaticon.com/icons/svg/124/124569.svg',
        10: 'https://image.flaticon.com/icons/svg/124/124573.svg',
        11: 'https://image.flaticon.com/icons/svg/124/124586.svg',
        12: 'https://image.flaticon.com/icons/svg/124/124548.svg',
        13: 'https://image.flaticon.com/icons/svg/124/124555.svg',
      }
    }
    //-------------
    let hidePaper;
    if (this.state.items.length === 0) {
      // <div><h3>You have to prioritize this day </h3></div>
    } else {
      hidePaper = <ul id='Incomplete'>
        <h3>your plans</h3> <br />
        <div class='letter' className={this.state.hide} >
          <Lists
            items={this.state.items}
            delItem={this.delItem.bind(this)}
          />
        </div>
        {/* <button class='clear' onClick={this.clearAll}>Clear All</button> */}
      </ul>
    }
    return (
      <div className="App">
        <div className="title">
        </div>
        <Sky
          images={modes[mode]}
          how={how} /* Pass the number of images Sky will render chosing randomly */
          size="100px" /* size of the rendered images */
          time={30} /* time of animation */
          background={background}
        />

        <form class='container' onSubmit={this.submitForm.bind(this)}>
          <img class='header' src='https://fanart.tv/fanart/movies/129139/hdmovielogo/the-to-do-list-538fe1236b047.png' />
          <p>
            <input id="new-task" type="text" placeholder='What is your main foucs ?' onChange={this.changeForm.bind(this)} value={this.state.text} />
          </p>
          {/* <h3>your plans</h3> <br /> */}
          {hidePaper}
          <h2>BE<span class="colorTwo"> AMAZING</span> TODAY</h2>
          {/* <button class='clear' onClick={this.clearAll}>Clear All</button> */}
        </form>
      </div>
    );
  }
}

export default App;