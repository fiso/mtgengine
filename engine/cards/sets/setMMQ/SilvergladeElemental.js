"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilvergladeElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Silverglade Elemental", "Mercadian Masques", "MMQ");
  }
}

module.exports = SilvergladeElemental;
