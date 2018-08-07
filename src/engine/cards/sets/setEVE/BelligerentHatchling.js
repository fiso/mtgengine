"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelligerentHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Belligerent Hatchling", "Eventide", "EVE");
  }
}

module.exports = BelligerentHatchling;
