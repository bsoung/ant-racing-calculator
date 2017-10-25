/**
 * @flow
 * @relayHash 8f0ed0747ca4aaa6a494301986ba60a0
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppAllAntQueryResponse = {|
  +ants: $ReadOnlyArray<?{| |}>;
|};
*/


/*
query AppAllAntQuery {
  ants {
    ...AntList_ants
  }
}

fragment AntList_ants on Ant {
  name
  color
  length
  weight
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllAntQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Ant",
        "name": "ants",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AntList_ants",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppAllAntQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppAllAntQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Ant",
        "name": "ants",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Ant",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "color",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "length",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "weight",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppAllAntQuery {\n  ants {\n    ...AntList_ants\n  }\n}\n\nfragment AntList_ants on Ant {\n  name\n  color\n  length\n  weight\n}\n"
};

module.exports = batch;
