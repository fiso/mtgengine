"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WayfaringTemple extends UnimplementedCard {
  constructor (game) {
    super(game, "Wayfaring Temple", "Return to Ravnica", "RTR");
  }
}

module.exports = WayfaringTemple;
