"use strict";
const Constants = require ("../../../Constants");
const WarrenPilferersBase = require("../setLRW/WarrenPilferers");

class WarrenPilferers extends WarrenPilferersBase {
  constructor(game) {
    super(game, "Warren Pilferers", "Modern Masters", "MMA");
  }
}

module.exports = WarrenPilferers;
