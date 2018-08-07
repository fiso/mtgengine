"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlowingAnemone extends UnimplementedCard {
  constructor (game) {
    super(game, "Glowing Anemone", "Mercadian Masques", "MMQ");
  }
}

module.exports = GlowingAnemone;
