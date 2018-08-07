"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetingDistraction extends UnimplementedCard {
  constructor (game) {
    super(game, "Fleeting Distraction", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = FleetingDistraction;
