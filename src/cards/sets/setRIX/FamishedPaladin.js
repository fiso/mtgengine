"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FamishedPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Famished Paladin", "Rivals of Ixalan", "RIX");
  }
}

module.exports = FamishedPaladin;
