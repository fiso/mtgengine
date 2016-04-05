"use strict";
const Constants = require ("../../../Constants");
const BramblewoodParagonBase = require("../setpCMP/BramblewoodParagon");

class BramblewoodParagon extends BramblewoodParagonBase {
  constructor(game) {
    super(game, "Bramblewood Paragon", "Morningtide", "MOR");
  }
}

module.exports = BramblewoodParagon;
