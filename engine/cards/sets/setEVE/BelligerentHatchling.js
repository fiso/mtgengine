"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BelligerentHatchling extends Card {
  constructor(game) {
    super(game, "Belligerent Hatchling", "Eventide", "EVE");
  }
}

module.exports = BelligerentHatchling;
