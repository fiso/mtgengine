"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IllusionaryForcesBase = require("../setICE/IllusionaryForces.js");

class IllusionaryForces extends IllusionaryForcesBase {
  constructor(game) {
    super(game, "Illusionary Forces", "Masters Edition", "MED");
  }
}

module.exports = IllusionaryForces;
