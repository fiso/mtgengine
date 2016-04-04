"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrashingMossdog extends Card {
  constructor(game) {
    super(game, "Thrashing Mossdog", "Dragon's Maze", "DGM");
  }
}

module.exports = ThrashingMossdog;
