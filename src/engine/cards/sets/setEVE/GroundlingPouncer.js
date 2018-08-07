"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GroundlingPouncer extends UnimplementedCard {
  constructor (game) {
    super(game, "Groundling Pouncer", "Eventide", "EVE");
  }
}

module.exports = GroundlingPouncer;
