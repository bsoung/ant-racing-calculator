import React, { Component } from "react";
import { graphql, createFragmentContainer } from "react-relay";
import Ant from "./Ant";
import _ from "lodash";

import generateAntWinLikelihoodCalculator from "../utils/calculateWinningOdds";

class AntList extends Component {
  state = {
    ants: []
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

  render() {
    return (
      <div>
        <button>calculate</button>
        {_.map(this.props.ants, ant => <Ant {...this.props} />)}
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
