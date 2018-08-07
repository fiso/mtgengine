"use strict";
const Constants = require ("../../../Constants");
const HellkiteHatchlingBase = require("../setPCA/HellkiteHatchling");

class HellkiteHatchling extends HellkiteHatchlingBase {
  constructor (game) {
    super(game, "Hellkite Hatchling", "Conflux", "CON");
  }
}

module.exports = HellkiteHatchling;
