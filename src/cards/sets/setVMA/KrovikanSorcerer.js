"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanSorcerer extends UnimplementedCard {
  constructor (game) {
    super(game, "Krovikan Sorcerer", "Vintage Masters", "VMA");
  }
}

module.exports = KrovikanSorcerer;
