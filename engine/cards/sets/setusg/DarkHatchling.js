"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkHatchlingBase = require("../setCMD/DarkHatchling.js");

class DarkHatchling extends DarkHatchlingBase {
  constructor(game) {
    super(game, "Dark Hatchling", "Urza's Saga", "USG");
  }
}

module.exports = DarkHatchling;
