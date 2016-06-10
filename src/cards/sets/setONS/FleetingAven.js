"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetingAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Fleeting Aven", "Onslaught", "ONS");
  }
}

module.exports = FleetingAven;
