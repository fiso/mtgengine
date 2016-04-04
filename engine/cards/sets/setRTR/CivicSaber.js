"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CivicSaber extends Card {
  constructor(game) {
    super(game, "Civic Saber", "Return to Ravnica", "RTR");
  }
}

module.exports = CivicSaber;
