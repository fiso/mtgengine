"use strict";
const Constants = require ("../../../Constants");
const RavensCrimeBase = require("../setEVE/RavensCrime");

class RavensCrime extends RavensCrimeBase {
  constructor(game) {
    super(game, "Raven's Crime", "Modern Masters", "MMA");
  }
}

module.exports = RavensCrime;
