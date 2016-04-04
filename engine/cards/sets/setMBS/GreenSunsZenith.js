"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreenSunsZenithBase = require("../setV13/GreenSunsZenith.js");

class GreenSunsZenith extends GreenSunsZenithBase {
  constructor(game) {
    super(game, "Green Sun's Zenith", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GreenSunsZenith;
