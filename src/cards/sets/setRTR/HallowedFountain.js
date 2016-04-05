"use strict";
const Constants = require ("../../../Constants");
const HallowedFountainBase = require("../setDIS/HallowedFountain");

class HallowedFountain extends HallowedFountainBase {
  constructor(game) {
    super(game, "Hallowed Fountain", "Return to Ravnica", "RTR");
  }
}

module.exports = HallowedFountain;
