"use strict";
const Constants = require ("../../../Constants");
const HellkiteHatchlingBase = require("../setCON/HellkiteHatchling");

class HellkiteHatchling extends HellkiteHatchlingBase {
  constructor (game) {
    super(game, "Hellkite Hatchling", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = HellkiteHatchling;
