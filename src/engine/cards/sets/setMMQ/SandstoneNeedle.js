"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandstoneNeedle extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandstone Needle", "Mercadian Masques", "MMQ");
  }
}

module.exports = SandstoneNeedle;
