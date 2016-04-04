"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Glowrider extends Card {
  constructor(game) {
    super(game, "Glowrider", "Legions", "LGN");
  }
}

module.exports = Glowrider;
