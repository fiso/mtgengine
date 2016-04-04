"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritualFocus extends Card {
  constructor(game) {
    super(game, "Spiritual Focus", "Mercadian Masques", "MMQ");
  }
}

module.exports = SpiritualFocus;
