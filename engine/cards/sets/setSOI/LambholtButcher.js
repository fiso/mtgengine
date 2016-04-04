"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LambholtButcher extends Card {
  constructor(game) {
    super(game, "Lambholt Butcher", "Shadows over Innistrad", "SOI");
  }
}

module.exports = LambholtButcher;
