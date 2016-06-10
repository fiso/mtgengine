"use strict";
const Constants = require ("../../../Constants");
const EyeblightsEndingBase = require("../setDPA/EyeblightsEnding");

class EyeblightsEnding extends EyeblightsEndingBase {
  constructor (game) {
    super(game, "Eyeblight's Ending", "Lorwyn", "LRW");
  }
}

module.exports = EyeblightsEnding;
