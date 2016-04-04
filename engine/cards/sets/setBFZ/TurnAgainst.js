"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurnAgainst extends Card {
  constructor(game) {
    super(game, "Turn Against", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TurnAgainst;
