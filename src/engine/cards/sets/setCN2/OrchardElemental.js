"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrchardElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Orchard Elemental", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = OrchardElemental;
