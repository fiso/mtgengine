"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightwindGlider extends UnimplementedCard {
  constructor(game) {
    super(game, "Nightwind Glider", "Mercadian Masques", "MMQ");
  }
}

module.exports = NightwindGlider;
