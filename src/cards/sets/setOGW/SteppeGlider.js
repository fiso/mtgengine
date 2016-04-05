"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteppeGlider extends UnimplementedCard {
  constructor(game) {
    super(game, "Steppe Glider", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SteppeGlider;
