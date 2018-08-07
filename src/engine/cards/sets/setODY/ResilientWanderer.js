"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResilientWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Resilient Wanderer", "Odyssey", "ODY");
  }
}

module.exports = ResilientWanderer;
