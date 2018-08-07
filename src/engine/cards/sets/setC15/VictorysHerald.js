"use strict";
const Constants = require ("../../../Constants");
const VictorysHeraldBase = require("../setCM2/VictorysHerald");

class VictorysHerald extends VictorysHeraldBase {
  constructor (game) {
    super(game, "Victory's Herald", "Commander 2015", "C15");
  }
}

module.exports = VictorysHerald;
