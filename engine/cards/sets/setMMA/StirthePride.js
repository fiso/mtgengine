"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StirthePrideBase = require("../setDST/StirthePride.js");

class StirthePride extends StirthePrideBase {
  constructor(game) {
    super(game, "Stir the Pride", "Modern Masters", "MMA");
  }
}

module.exports = StirthePride;
