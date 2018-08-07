"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Liability extends UnimplementedCard {
  constructor (game) {
    super(game, "Liability", "Mercadian Masques", "MMQ");
  }
}

module.exports = Liability;
