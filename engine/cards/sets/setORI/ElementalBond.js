"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElementalBond extends UnimplementedCard {
  constructor(game) {
    super(game, "Elemental Bond", "Magic Origins", "ORI");
  }
}

module.exports = ElementalBond;
