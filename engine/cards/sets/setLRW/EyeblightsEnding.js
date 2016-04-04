"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EyeblightsEndingBase = require("../setDPA/EyeblightsEnding.js");

class EyeblightsEnding extends EyeblightsEndingBase {
  constructor(game) {
    super(game, "Eyeblight's Ending", "Lorwyn", "LRW");
  }
}

module.exports = EyeblightsEnding;
