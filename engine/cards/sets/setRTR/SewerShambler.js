"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SewerShambler extends Card {
  constructor(game) {
    super(game, "Sewer Shambler", "Return to Ravnica", "RTR");
  }
}

module.exports = SewerShambler;
