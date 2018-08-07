"use strict";
const Constants = require ("../../../Constants");
const PhantasmalForcesBase = require("../setME4/PhantasmalForces");

class PhantasmalForces extends PhantasmalForcesBase {
  constructor (game) {
    super(game, "Phantasmal Forces", "Limited Edition Beta", "LEB");
  }
}

module.exports = PhantasmalForces;
