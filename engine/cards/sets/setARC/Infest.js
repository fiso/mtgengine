"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Infest extends Card {
  constructor(game) {
    super(game, "Infest", "Archenemy", "ARC");
  }
}

module.exports = Infest;
