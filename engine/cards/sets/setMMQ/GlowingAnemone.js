"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlowingAnemone extends Card {
  constructor(game) {
    super(game, "Glowing Anemone", "Mercadian Masques", "MMQ");
  }
}

module.exports = GlowingAnemone;
