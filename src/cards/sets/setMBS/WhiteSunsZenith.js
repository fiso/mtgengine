"use strict";
const Constants = require ("../../../Constants");
const WhiteSunsZenithBase = require("../setC14/WhiteSunsZenith");

class WhiteSunsZenith extends WhiteSunsZenithBase {
  constructor(game) {
    super(game, "White Sun's Zenith", "Mirrodin Besieged", "MBS");
  }
}

module.exports = WhiteSunsZenith;
