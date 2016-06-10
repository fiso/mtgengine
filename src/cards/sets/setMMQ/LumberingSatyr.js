"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LumberingSatyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Lumbering Satyr", "Mercadian Masques", "MMQ");
  }
}

module.exports = LumberingSatyr;
