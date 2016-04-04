"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BramblewoodParagonBase = require("../setpCMP/BramblewoodParagon.js");

class BramblewoodParagon extends BramblewoodParagonBase {
  constructor(game) {
    super(game, "Bramblewood Paragon", "Morningtide", "MOR");
  }
}

module.exports = BramblewoodParagon;
