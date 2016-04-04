"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurntoSlag extends Card {
  constructor(game) {
    super(game, "Turn to Slag", "Magic 2013", "M13");
  }
}

module.exports = TurntoSlag;
