"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForcedMarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Forced March", "Mercadian Masques", "MMQ");
  }
}

module.exports = ForcedMarch;
