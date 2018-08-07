"use strict";
const Constants = require ("../../../Constants");
const WarrenPilferersBase = require("../setMMA/WarrenPilferers");

class WarrenPilferers extends WarrenPilferersBase {
  constructor (game) {
    super(game, "Warren Pilferers", "Lorwyn", "LRW");
  }
}

module.exports = WarrenPilferers;
