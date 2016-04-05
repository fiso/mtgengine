"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamingSword extends UnimplementedCard {
  constructor(game) {
    super(game, "Flaming Sword", "Mercadian Masques", "MMQ");
  }
}

module.exports = FlamingSword;
