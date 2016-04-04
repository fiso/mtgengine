"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlimpseofNature extends UnimplementedCard {
  constructor(game) {
    super(game, "Glimpse of Nature", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GlimpseofNature;
