"use strict";
const Constants = require ("../../../Constants");
const BatteringCraghornBase = require("../setARC/BatteringCraghorn");

class BatteringCraghorn extends BatteringCraghornBase {
  constructor (game) {
    super(game, "Battering Craghorn", "Onslaught", "ONS");
  }
}

module.exports = BatteringCraghorn;
