"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NivmagusElemental extends Card {
  constructor(game) {
    super(game, "Nivmagus Elemental", "Return to Ravnica", "RTR");
  }
}

module.exports = NivmagusElemental;
