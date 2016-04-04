"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrongholdOverseer extends Card {
  constructor(game) {
    super(game, "Stronghold Overseer", "Time Spiral", "TSP");
  }
}

module.exports = StrongholdOverseer;
