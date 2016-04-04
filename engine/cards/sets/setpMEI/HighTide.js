"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HighTideBase = require("../setFEM/HighTide.js");

class HighTide extends HighTideBase {
  constructor(game) {
    super(game, "High Tide", "Media Inserts", "pMEI");
  }
}

module.exports = HighTide;
