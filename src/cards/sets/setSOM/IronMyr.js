"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Iron Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = IronMyr;
