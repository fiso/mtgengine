"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Copper Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CopperMyr;
