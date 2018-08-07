"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElectrostaticPummeler extends UnimplementedCard {
  constructor (game) {
    super(game, "Electrostatic Pummeler", "Kaladesh", "KLD");
  }
}

module.exports = ElectrostaticPummeler;
