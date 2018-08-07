"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritualFocus extends UnimplementedCard {
  constructor (game) {
    super(game, "Spiritual Focus", "Mercadian Masques", "MMQ");
  }
}

module.exports = SpiritualFocus;
