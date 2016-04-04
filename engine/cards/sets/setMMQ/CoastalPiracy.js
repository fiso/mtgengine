"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoastalPiracyBase = require("../set8ED/CoastalPiracy.js");

class CoastalPiracy extends CoastalPiracyBase {
  constructor(game) {
    super(game, "Coastal Piracy", "Mercadian Masques", "MMQ");
  }
}

module.exports = CoastalPiracy;
