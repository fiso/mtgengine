"use strict";
const Constants = require ("../../../Constants");
const IllusionaryForcesBase = require("../setMED/IllusionaryForces");

class IllusionaryForces extends IllusionaryForcesBase {
  constructor (game) {
    super(game, "Illusionary Forces", "Ice Age", "ICE");
  }
}

module.exports = IllusionaryForces;
