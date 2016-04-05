"use strict";
const Constants = require ("../../../Constants");
const ThranQuarryBase = require("../setpSUS/ThranQuarry");

class ThranQuarry extends ThranQuarryBase {
  constructor(game) {
    super(game, "Thran Quarry", "Urza's Saga", "USG");
  }
}

module.exports = ThranQuarry;
