"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WayfaringTemple extends Card {
  constructor(game) {
    super(game, "Wayfaring Temple", "Return to Ravnica", "RTR");
  }
}

module.exports = WayfaringTemple;
