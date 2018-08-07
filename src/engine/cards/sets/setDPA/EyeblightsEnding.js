"use strict";
const Constants = require ("../../../Constants");
const EyeblightsEndingBase = require("../setEMA/EyeblightsEnding");

class EyeblightsEnding extends EyeblightsEndingBase {
  constructor (game) {
    super(game, "Eyeblight's Ending", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = EyeblightsEnding;
