import React, { Component } from "react";
import Card from "./components/Card";
import "./App.css";

class App extends Component {
  state = JSON.parse(sessionStorage.getItem("state"));

  state = sessionStorage.state
    ? JSON.parse(sessionStorage.getItem("state"))
    : {
        rooms: [
          {
            num: 1,
            enabled: true,
            adults: 0,
            children: 0
          },
          {
            num: 2,
            enabled: false,
            adults: 0,
            children: 0
          },
          {
            num: 3,
            enabled: false,
            adults: 0,
            children: 0
          },
          {
            num: 4,
            enabled: false,
            adults: 0,
            children: 0
          }
        ]
      };

  handleSubmit = () => {
    sessionStorage.setItem("state", JSON.stringify(this.state));
  };

  handleSelect = (roomNum, type, e) => {
    let stObj = { rooms: [...this.state.rooms] };
    stObj.rooms[roomNum - 1][type] = parseInt(e.target.value);
    this.setState({ ...stObj });
  };

  onStatusChange = e => {
    let x = this.state.rooms[e.target.value - 1].enabled;
    this.state.rooms.forEach(room => {
      if (room.num < e.target.value) {
        room.enabled = true;
      }
      if (room.num == e.target.value) {
        room.enabled = !x;
        if (!room.enabled) {
          room.adults = 1;
          room.children = 0;
        }
      } else if (room.num > e.target.value) {
        room.enabled = false;
        room.adults = 1;
        room.children = 0;
      }
    });
    this.setState({
      rooms: [...this.state.rooms]
    });
  };

  render() {
    return (
      <div className="container">
        <div className="App card-deck mt-5">
          {this.state.rooms.map((room, index) => (
            <Card
              key={index}
              room={room}
              submit={this.handleSubmit}
              toggleEnable={this.onStatusChange}
              toggleSelect={this.handleSelect}
            />
          ))}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
