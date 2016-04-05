"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulBleed extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Bleed", "Magic 2010", "M10");
  }
}

module.exports = SoulBleed;
