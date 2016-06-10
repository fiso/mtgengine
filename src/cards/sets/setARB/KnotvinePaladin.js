"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnotvinePaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Knotvine Paladin", "Alara Reborn", "ARB");
  }
}

module.exports = KnotvinePaladin;
