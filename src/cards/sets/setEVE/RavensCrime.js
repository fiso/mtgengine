"use strict";
const Constants = require ("../../../Constants");
const RavensCrimeBase = require("../setMMA/RavensCrime");

class RavensCrime extends RavensCrimeBase {
  constructor (game) {
    super(game, "Raven's Crime", "Eventide", "EVE");
  }
}

module.exports = RavensCrime;
