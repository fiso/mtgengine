"use strict";
const Constants = require ("../../../Constants");
const HallowedFountainBase = require("../setEXP/HallowedFountain");

class HallowedFountain extends HallowedFountainBase {
  constructor (game) {
    super(game, "Hallowed Fountain", "Dissension", "DIS");
  }
}

module.exports = HallowedFountain;
