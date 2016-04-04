"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RavensCrimeBase = require("../setEVE/RavensCrime.js");

class RavensCrime extends RavensCrimeBase {
  constructor(game) {
    super(game, "Raven's Crime", "Modern Masters", "MMA");
  }
}

module.exports = RavensCrime;
