"use strict";
const Constants = require ("../../../Constants");
const VictorysHeraldBase = require("../setCM2/VictorysHerald");

class VictorysHerald extends VictorysHeraldBase {
  constructor (game) {
    super(game, "Victory's Herald", "Welcome Deck 2017", "W17");
  }
}

module.exports = VictorysHerald;
