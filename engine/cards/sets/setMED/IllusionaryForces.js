"use strict";
const Constants = require ("../../../Constants");
const IllusionaryForcesBase = require("../setICE/IllusionaryForces");

class IllusionaryForces extends IllusionaryForcesBase {
  constructor(game) {
    super(game, "Illusionary Forces", "Masters Edition", "MED");
  }
}

module.exports = IllusionaryForces;
