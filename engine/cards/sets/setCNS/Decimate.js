"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Decimate extends Card {
  constructor(game) {
    super(game, "Decimate", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Decimate;
