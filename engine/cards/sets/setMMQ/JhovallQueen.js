"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JhovallQueen extends UnimplementedCard {
  constructor(game) {
    super(game, "Jhovall Queen", "Mercadian Masques", "MMQ");
  }
}

module.exports = JhovallQueen;
