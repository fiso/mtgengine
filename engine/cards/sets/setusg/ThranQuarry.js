"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThranQuarryBase = require("../setpSUS/ThranQuarry.js");

class ThranQuarry extends ThranQuarryBase {
  constructor(game) {
    super(game, "Thran Quarry", "Urza's Saga", "USG");
  }
}

module.exports = ThranQuarry;
