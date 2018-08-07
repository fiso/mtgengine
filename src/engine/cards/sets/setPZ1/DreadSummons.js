"use strict";
const Constants = require ("../../../Constants");
const DreadSummonsBase = require("../setCMA/DreadSummons");

class DreadSummons extends DreadSummonsBase {
  constructor (game) {
    super(game, "Dread Summons", "Legendary Cube", "PZ1");
  }
}

module.exports = DreadSummons;
