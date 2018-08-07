"use strict";
const Constants = require ("../../../Constants");
const ScavengerDrakeBase = require("../setMM2/ScavengerDrake");

class ScavengerDrake extends ScavengerDrakeBase {
  constructor (game) {
    super(game, "Scavenger Drake", "Shards of Alara", "ALA");
  }
}

module.exports = ScavengerDrake;
