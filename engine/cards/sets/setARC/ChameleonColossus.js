"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChameleonColossus extends Card {
  constructor(game) {
    super(game, "Chameleon Colossus", "Archenemy", "ARC");
  }
}

module.exports = ChameleonColossus;
