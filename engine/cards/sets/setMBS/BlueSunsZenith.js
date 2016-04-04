"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlueSunsZenithBase = require("../setC13/BlueSunsZenith.js");

class BlueSunsZenith extends BlueSunsZenithBase {
  constructor(game) {
    super(game, "Blue Sun's Zenith", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BlueSunsZenith;
