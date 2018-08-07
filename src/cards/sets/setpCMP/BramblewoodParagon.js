"use strict";
const Constants = require ("../../../Constants");
const BramblewoodParagonBase = require("../setMOR/BramblewoodParagon");

class BramblewoodParagon extends BramblewoodParagonBase {
  constructor (game) {
    super(game, "Bramblewood Paragon", "Champs and States", "PCMP");
  }
}

module.exports = BramblewoodParagon;
