"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElementalUprising extends UnimplementedCard {
  constructor (game) {
    super(game, "Elemental Uprising", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ElementalUprising;
