"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrReservoir extends UnimplementedCard {
  constructor(game) {
    super(game, "Myr Reservoir", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MyrReservoir;
