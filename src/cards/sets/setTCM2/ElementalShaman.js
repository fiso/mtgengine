"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElementalShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Elemental Shaman", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = ElementalShaman;
