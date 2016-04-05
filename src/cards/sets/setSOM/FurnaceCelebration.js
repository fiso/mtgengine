"use strict";
const Constants = require ("../../../Constants");
const FurnaceCelebrationBase = require("../setC13/FurnaceCelebration");

class FurnaceCelebration extends FurnaceCelebrationBase {
  constructor(game) {
    super(game, "Furnace Celebration", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FurnaceCelebration;
