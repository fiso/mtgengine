"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Unmake extends Card {
  constructor(game) {
    super(game, "Unmake", "Archenemy", "ARC");
  }
}

module.exports = Unmake;
