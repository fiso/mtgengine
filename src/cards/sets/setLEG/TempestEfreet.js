"use strict";
const Constants = require ("../../../Constants");
const TempestEfreetBase = require("../set4ED/TempestEfreet");

class TempestEfreet extends TempestEfreetBase {
  constructor(game) {
    super(game, "Tempest Efreet", "Legends", "LEG");
  }
}

module.exports = TempestEfreet;
