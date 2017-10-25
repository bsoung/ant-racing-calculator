import React, { Component } from "react";
import Ant from "./Ant";
import { graphql, createFragmentContainer } from "react-relay";
import _ from "lodash";

import generateAntWinLikelihoodCalculator from "../utils/calculateWinningOdds";

class AntList extends Component {
  state = {
    ants: [],
    isCalculating: false,
    antUpdateTicker: 0
  };

  componentDidMount() {
    this.setState({
      ants: this.props.ants
    });
  }

  // either begin or reset the ant calculations
  setLoadingState = loadState => {
    const { ants } = this.state;

    if (loadState) {
      return this.setState({
        ants: _.map(ants, ant => ({ ...ant, status: "Loading..." })),
        isCalculating: true
      });
    }

    this.setState({
      ants: _.map(ants, ant => ({
        ...ant,
        status: null,
        odds: null
      })),
      isCalculating: false,
      antUpdateTicker: 0,
      ranking: []
    });
  };

  /**
   * Ant calculation logic
   */

  // insert updated item back in the array copy
  arrUpdateItemByIndex = (arr, index, item) => {
    return [...arr.slice(0, index), item, ...arr.slice(index + 1)];
  };

  // calculate success odds of ant using provided algorithm
  calculateAnt = ant => {
    generateAntWinLikelihoodCalculator()(result => {
      const newAnt = { ...ant, odds: Math.floor(result * 100) };
      this.updateAnt(newAnt);
    });
  };

  // grab the correct updated ant by name, stick it in array copy, then sort and update
  updateAnt = ant => {
    let { ants, antUpdateTicker } = this.state;
    let incrementedTicker = ++antUpdateTicker;
    const antIndex = ants.findIndex(_ant => _ant.name === ant.name);
    const newAnts = this.arrUpdateItemByIndex(ants, antIndex, ant);

    this.setState({
      ants: newAnts.sort((a, b) => a.odds < b.odds),
      antUpdateTicker: incrementedTicker
    });
  };

  /**
   * Even handlers
   */

  onClickCalculateOdds = () => {
    this.setLoadingState(true);
    _.each(this.props.ants, this.calculateAnt);
  };

  onClickResetOdds = () => {
    this.setLoadingState(false);
  };

  /**
   * Render methods
   */

  renderLoadingInfo = () => {
    const { isCalculating, antUpdateTicker, ants } = this.state;
    const loadingObj = {};

    if (isCalculating && antUpdateTicker === ants.length) {
      loadingObj.buttonMessage = "Finished!";
      loadingObj.loadImage =
        "http://www.imagefully.com/wp-content/uploads/2015/07/Beautiful-Cute-Ant-Image-Share-On-Facebook.jpg";
    } else if (isCalculating) {
      loadingObj.buttonMessage = "Calculating...";
      loadingObj.loadImage =
        "https://media.tenor.com/images/927de715ef7e355e92647e514fd50690/tenor.gif";
    } else {
      loadingObj.buttonMessage = "Calculate Odds";
      loadingObj.loadImage =
        "http://medimoon.com/wp-content/uploads/2014/02/zt-ants-ifc_01.jpg";
    }

    return loadingObj;
  };

  renderAntList = ants => {
    return _.map(ants, (ant, index) => (
      <Ant
        key={ant.name}
        rank={index + 1}
        randRotate={Math.floor(Math.random() * 20) - 10}
        antUpdateTicker={this.state.antUpdateTicker}
        ants={this.state.ants}
        {...ant}
      />
    ));
  };

  render() {
    const { isCalculating, antUpdateTicker, ants } = this.state;

    return (
      <div className="ant-list-component">
        <div className="ant-paper-container">
          <img src={this.renderLoadingInfo().loadImage} alt="antz rule" />
          <div className="ant-paper">
            <h1>The Ant Racing Calculator</h1>
            <p>Gain an edge over your opponents :)</p>
            <br />
            <button
              onClick={this.onClickCalculateOdds}
              disabled={isCalculating}
            >
              {this.renderLoadingInfo().buttonMessage}
            </button>
            <button
              onClick={this.onClickResetOdds}
              disabled={!isCalculating || antUpdateTicker !== ants.length}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="ants-paper-container">{this.renderAntList(ants)}</div>
      </div>
    );
  }
}

export default createFragmentContainer(
  AntList,
  graphql`
    fragment AntList_ants on Ant @relay(plural: true) {
      name
      color
      length
      weight
    }
  `
);
