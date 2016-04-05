"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NivmagusElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Nivmagus Elemental", "Return to Ravnica", "RTR");
  }
}

module.exports = NivmagusElemental;
