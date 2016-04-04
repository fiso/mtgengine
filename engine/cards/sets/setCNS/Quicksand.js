"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Quicksand extends Card {
  constructor(game) {
    super(game, "Quicksand", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Quicksand;
