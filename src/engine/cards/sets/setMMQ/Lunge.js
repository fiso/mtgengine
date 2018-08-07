"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lunge extends UnimplementedCard {
  constructor (game) {
    super(game, "Lunge", "Mercadian Masques", "MMQ");
  }
}

module.exports = Lunge;
