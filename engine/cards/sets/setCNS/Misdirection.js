"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Misdirection extends Card {
  constructor(game) {
    super(game, "Misdirection", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Misdirection;
