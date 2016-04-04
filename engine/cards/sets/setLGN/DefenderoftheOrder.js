"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefenderoftheOrder extends Card {
  constructor(game) {
    super(game, "Defender of the Order", "Legions", "LGN");
  }
}

module.exports = DefenderoftheOrder;
