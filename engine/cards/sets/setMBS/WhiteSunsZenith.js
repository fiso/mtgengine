"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhiteSunsZenithBase = require("../setC14/WhiteSunsZenith.js");

class WhiteSunsZenith extends WhiteSunsZenithBase {
  constructor(game) {
    super(game, "White Sun's Zenith", "Mirrodin Besieged", "MBS");
  }
}

module.exports = WhiteSunsZenith;
