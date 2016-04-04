"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wane extends Card {
  constructor(game) {
    super(game, "Wane", "Archenemy", "ARC");
  }
}

module.exports = Wane;
