"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlassesofUrza extends UnimplementedCard {
  constructor(game) {
    super(game, "Glasses of Urza", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GlassesofUrza;
