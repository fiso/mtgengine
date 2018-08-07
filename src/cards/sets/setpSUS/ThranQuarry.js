"use strict";
const Constants = require ("../../../Constants");
const ThranQuarryBase = require("../setPRM/ThranQuarry");

class ThranQuarry extends ThranQuarryBase {
  constructor (game) {
    super(game, "Thran Quarry", "Junior Super Series", "PSUS");
  }
}

module.exports = ThranQuarry;
