"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TendrilsofCorruptionBase = require("../setC14/TendrilsofCorruption.js");

class TendrilsofCorruption extends TendrilsofCorruptionBase {
  constructor(game) {
    super(game, "Tendrils of Corruption", "Time Spiral", "TSP");
  }
}

module.exports = TendrilsofCorruption;
