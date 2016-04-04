"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatalAttraction extends Card {
  constructor(game) {
    super(game, "Fatal Attraction", "Future Sight", "FUT");
  }
}

module.exports = FatalAttraction;
