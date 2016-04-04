"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarbreakTrumpeter extends Card {
  constructor(game) {
    super(game, "Warbreak Trumpeter", "Legions", "LGN");
  }
}

module.exports = WarbreakTrumpeter;
