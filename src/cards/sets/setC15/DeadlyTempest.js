"use strict";
const Constants = require ("../../../Constants");
const DeadlyTempestBase = require("../setPZ1/DeadlyTempest");

class DeadlyTempest extends DeadlyTempestBase {
  constructor (game) {
    super(game, "Deadly Tempest", "Commander 2015", "C15");
  }
}

module.exports = DeadlyTempest;
