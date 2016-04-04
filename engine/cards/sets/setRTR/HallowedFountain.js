"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HallowedFountainBase = require("../setDIS/HallowedFountain.js");

class HallowedFountain extends HallowedFountainBase {
  constructor(game) {
    super(game, "Hallowed Fountain", "Return to Ravnica", "RTR");
  }
}

module.exports = HallowedFountain;
