"use strict";
const Constants = require ("../../../Constants");
const CollectiveVoyageBase = require("../setC16/CollectiveVoyage");

class CollectiveVoyage extends CollectiveVoyageBase {
  constructor (game) {
    super(game, "Collective Voyage", "Commander 2011", "CMD");
  }
}

module.exports = CollectiveVoyage;
