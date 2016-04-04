"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurntheTide extends Card {
  constructor(game) {
    super(game, "Turn the Tide", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TurntheTide;
