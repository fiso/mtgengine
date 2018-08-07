"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElementalBond extends UnimplementedCard {
  constructor (game) {
    super(game, "Elemental Bond", "Commander 2017", "C17");
  }
}

module.exports = ElementalBond;
