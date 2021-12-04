import "./App.css";
import Profile from "./component/profile/profile";
import pic from "./component/profile/myphoto.jpg";
import pic2 from "./myphoto2.jpg";

import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover"
        }}
      >
        <button className="visibility-btn"  onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.isVisible ? (
          <Profile
            fullName=" WES ANDERSON "
            bio="Wes Anderson Bio"
            description="Wes Anderson is American film director, producer, screenwriter and occasional actor. He's known for such films as The Grand Budapest Hotel, The Royal Tenenbaums and Moonrise Kingdom. Anderson was born on May 1st, 1969 in Houston, Texas. His mother worked in real estate, and his father worked in advertising and public relations. He attended St. John's School followed by the University of Texas at Austin. He graduated in 1991 with a Bachelor of Arts degree in philosophy."
            profession="Wes Anderson's profession"
            job="In 1996, Wes Anderson released his first film 'Bottle Rocket' with Owen Wilson, based on his original short film.
            He re-teamed with Wilson for 1998's 'Rushmore' and 2001's 'The Royal Tenenbaums'; the former which began Bill Murray's string of Wes Anderson film appearances, the latter which was an Oscar nominee and a box office success.
            In 2004, he released 'The Life Aquatic with Steve Zissou', co-written by Noah Baumbach, which performed poorly both commercially and critically.
            In 2007, 'The Darjeeling Limited' was released on which he worked alongside Jason Schwartzman and Roman Coppola.
            He directed and wrote the 2009 stop motion animation adaptation of Roald Dahl's 'Fantastic Mr Fox' which was subsequently nominated for an Oscar.
            Following in 2012 was another Oscar nominee 'Moonrise Kingdom', his best film so far commercially.
            In 2014, he released the comedy 'The Grand Budapest Hotel' starring Ralph Fiennes, Jude Law and Saoirse Ronan, which grossed $175 million globally. 
            And in October 2021, Wes finally released His iconic film , The French Dispatch, after being postponed for a year due the pandemic issue "
          >
            <div>
              <img src={pic2} alt="" />
            </div>
          </Profile>
        ) : null}
      </div>
    );
  }
}
