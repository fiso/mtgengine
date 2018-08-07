"use strict";
const Constants = require ("../../../Constants");
const CoastalPiracyBase = require("../set8ED/CoastalPiracy");

class CoastalPiracy extends CoastalPiracyBase {
  constructor (game) {
    super(game, "Coastal Piracy", "Mercadian Masques", "MMQ");
  }
}

module.exports = CoastalPiracy;
