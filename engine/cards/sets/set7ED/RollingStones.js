"use strict";
const Constants = require ("../../../Constants");
const RollingStonesBase = require("../set8ED/RollingStones");

class RollingStones extends RollingStonesBase {
  constructor(game) {
    super(game, "Rolling Stones", "Seventh Edition", "7ED");
  }
}

module.exports = RollingStones;
