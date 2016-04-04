"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetingDistraction extends UnimplementedCard {
  constructor(game) {
    super(game, "Fleeting Distraction", "Avacyn Restored", "AVR");
  }
}

module.exports = FleetingDistraction;
