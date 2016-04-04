"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VictorysHerald extends Card {
  constructor(game) {
    super(game, "Victory's Herald", "Commander 2015", "C15");
  }
}

module.exports = VictorysHerald;
