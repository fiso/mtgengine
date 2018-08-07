"use strict";
const Constants = require ("../../../Constants");
const BramblewoodParagonBase = require("../setMOR/BramblewoodParagon");

class BramblewoodParagon extends BramblewoodParagonBase {
  constructor (game) {
    super(game, "Bramblewood Paragon", "Magic Online Promos", "PRM");
  }
}

module.exports = BramblewoodParagon;
