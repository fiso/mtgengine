"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skitterskin extends Card {
  constructor(game) {
    super(game, "Skitterskin", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Skitterskin;
