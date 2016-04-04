"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScavengerDrakeBase = require("../setMM2/ScavengerDrake.js");

class ScavengerDrake extends ScavengerDrakeBase {
  constructor(game) {
    super(game, "Scavenger Drake", "Shards of Alara", "ALA");
  }
}

module.exports = ScavengerDrake;
