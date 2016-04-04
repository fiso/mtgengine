"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarrenPilferersBase = require("../setLRW/WarrenPilferers.js");

class WarrenPilferers extends WarrenPilferersBase {
  constructor(game) {
    super(game, "Warren Pilferers", "Modern Masters", "MMA");
  }
}

module.exports = WarrenPilferers;
