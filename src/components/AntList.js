import React, { Component } from "react";
import { graphql, createFragmentContainer } from "react-relay";
import Ant from "./Ant";

class AntList extends Component {
  render() {
    return (
      <div>
        AntList Component
        <Ant />
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
