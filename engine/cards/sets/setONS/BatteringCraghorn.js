"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BatteringCraghornBase = require("../setARC/BatteringCraghorn.js");

class BatteringCraghorn extends BatteringCraghornBase {
  constructor(game) {
    super(game, "Battering Craghorn", "Onslaught", "ONS");
  }
}

module.exports = BatteringCraghorn;
