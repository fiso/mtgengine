"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RavenFamiliarBase = require("../setC13/RavenFamiliar.js");

class RavenFamiliar extends RavenFamiliarBase {
  constructor(game) {
    super(game, "Raven Familiar", "Urza's Legacy", "ULG");
  }
}

module.exports = RavenFamiliar;
