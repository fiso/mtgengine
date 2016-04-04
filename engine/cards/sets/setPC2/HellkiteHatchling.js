"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellkiteHatchlingBase = require("../setCON/HellkiteHatchling.js");

class HellkiteHatchling extends HellkiteHatchlingBase {
  constructor(game) {
    super(game, "Hellkite Hatchling", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = HellkiteHatchling;
