"use strict";
const Constants = require ("../../../Constants");
const HallowedFountainBase = require("../setDIS/HallowedFountain");

class HallowedFountain extends HallowedFountainBase {
  constructor(game) {
    super(game, "Hallowed Fountain", "Zendikar Expedition", "EXP");
  }
}

module.exports = HallowedFountain;
