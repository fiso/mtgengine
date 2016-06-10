"use strict";
const Constants = require ("../../../Constants");
const RavenFamiliarBase = require("../setC13/RavenFamiliar");

class RavenFamiliar extends RavenFamiliarBase {
  constructor (game) {
    super(game, "Raven Familiar", "Urza's Legacy", "ULG");
  }
}

module.exports = RavenFamiliar;
