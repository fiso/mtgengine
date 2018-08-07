"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlitteringLion extends UnimplementedCard {
  constructor (game) {
    super(game, "Glittering Lion", "Prophecy", "PCY");
  }
}

module.exports = GlitteringLion;
