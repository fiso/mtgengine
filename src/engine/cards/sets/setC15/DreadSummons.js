"use strict";
const Constants = require ("../../../Constants");
const DreadSummonsBase = require("../setCMA/DreadSummons");

class DreadSummons extends DreadSummonsBase {
  constructor (game) {
    super(game, "Dread Summons", "Commander 2015", "C15");
  }
}

module.exports = DreadSummons;
