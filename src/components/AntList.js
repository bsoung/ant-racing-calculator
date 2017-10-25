import React, { Component } from "react";
import { graphql, createFragmentContainer } from "react-relay";
import Ant from "./Ant";
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

  arrUpdateItemByIndex = (arr, index, item) => {
    return [...arr.slice(0, index), item, ...arr.slice(index + 1)];
  };

  calculateAnt = ant => {
    generateAntWinLikelihoodCalculator()(result => {
      const newAnt = { ...ant, odds: Math.floor(result * 100) };
      this.updateAnt(newAnt);
    });
  };

  updateAnt = ant => {
    const antIndex = this.state.ants.findIndex(a => a.name === ant.name);
    const newAnts = this.arrUpdateItemByIndex(this.state.ants, antIndex, ant);

    this.setState({
      ants: newAnts.sort((a, b) => a.odds < b.odds)
    });
  };

  onClickCalculateOdds = () => {
    _.each(this.state.ants, this.calculateAnt);
  };

  onClickResetOdds = () => {
    this.setLoadingState(false);
  };

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

  render() {
    return (
      <div>
        <h1>The Ant Racing Calculator</h1>
        <p>Gain an edge over your opponents :)</p>
        <img src={this.renderLoadingInfo().loadImage} alt="antz rule" />
        {_.map(this.props.ants, ant => <Ant {...this.props} />)}
        <button
          onClick={this.onClickCalculateOdds}
          disabled={this.state.isCalculating}
        >
          {this.renderLoadingInfo().buttonMessage}
        </button>
        <button
          onClick={this.onClickResetOdds}
          disabled={
            !this.stateisCalculating ||
            this.state.antUpdateTicker !== this.state.ants.length
          }
        >
          Reset
        </button>
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
