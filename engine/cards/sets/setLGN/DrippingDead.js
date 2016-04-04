"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrippingDead extends Card {
  constructor(game) {
    super(game, "Dripping Dead", "Legions", "LGN");
  }
}

module.exports = DrippingDead;
