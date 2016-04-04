"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrokenConcentration extends Card {
  constructor(game) {
    super(game, "Broken Concentration", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BrokenConcentration;
