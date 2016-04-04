"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StopThat extends Card {
  constructor(game) {
    super(game, "Stop That", "Unhinged", "UNH");
  }
}

module.exports = StopThat;
