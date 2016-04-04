"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurntoFrog extends Card {
  constructor(game) {
    super(game, "Turn to Frog", "Commander 2014", "C14");
  }
}

module.exports = TurntoFrog;
