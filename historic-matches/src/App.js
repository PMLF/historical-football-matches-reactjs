import React, {Component} from 'react';
import './App.scss';
import MatchThumbnail from './Components/MatchThumbnail/MatchThumbnail';
import SidebarArrow from './Components/SidebarArrow/SidebarArrow';
import MatchHeader from './Components/MatchHeader/MatchHeader';
import SquadList from './Components/SquadList/SquadList';
import ResultDisplay from './Components/ResultDisplay/ResultDisplay';
import {rawData} from './data/matches';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { match: rawData.matches[0] };
    this.selectMatch = this.selectMatch.bind(this);
    this.sidebarScrollUp = this.sidebarScrollUp.bind(this);
    this.sidebarScrollDown = this.sidebarScrollDown.bind(this);
  }

  selectMatch (newState) {
    this.setState({
      match: newState
    });
  }

  sidebarScrollUp () {
    console.log("up");
    window.scroll({
      top: 100,
      behavior: 'smooth'
    });
  }

  sidebarScrollDown () {
    console.log("down");
    window.scroll({
      bottom: 100,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className="App" >
        <div className="sidebar">
          <SidebarArrow onClick={this.sidebarScrollUp}></SidebarArrow>
          <div className="sidebar-main hideScrollBar">
            {
              rawData.matches.map(
                (match, index) => <MatchThumbnail data={match} key={index} onClick={() => this.selectMatch(match)}></MatchThumbnail>
              )
            }
          </div>
          <SidebarArrow onClick={this.sidebarScrollDown}></SidebarArrow>
        </div>
        <div className="main">
          <MatchHeader data={this.state.match}></MatchHeader>
          <section className="match-data">
            <SquadList data={this.state.match.teams[0].squad}></SquadList>
            <ResultDisplay data={this.state.match}></ResultDisplay>
            <SquadList data={this.state.match.teams[1].squad}></SquadList>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
