"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoilingEarth extends Card {
  constructor(game) {
    super(game, "Boiling Earth", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BoilingEarth;
