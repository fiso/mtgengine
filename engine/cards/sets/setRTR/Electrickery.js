"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Electrickery extends Card {
  constructor(game) {
    super(game, "Electrickery", "Return to Ravnica", "RTR");
  }
}

module.exports = Electrickery;
