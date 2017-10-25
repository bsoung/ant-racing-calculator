import React, { Component } from "react";
import { graphql, createFragmentContainer } from "react-relay";
import Ant from "./Ant";
import _ from "lodash";

class AntList extends Component {
  state = {
    ants: []
  };

  arrUpdateItemByIndex = (arr, index, item) => {
    return [...arr.slice(0, index), item, ...arr.slice(index + 1)];
  };

  render() {
    return <div>{_.map(this.props.ants, ant => <Ant {...this.props} />)}</div>;
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
