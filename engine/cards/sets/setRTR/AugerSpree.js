"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AugerSpree extends Card {
  constructor(game) {
    super(game, "Auger Spree", "Return to Ravnica", "RTR");
  }
}

module.exports = AugerSpree;
