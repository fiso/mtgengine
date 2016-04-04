"use strict";
const Constants = require ("../../../Constants");
const PhantasmalForcesBase = require("../setCED/PhantasmalForces");

class PhantasmalForces extends PhantasmalForcesBase {
  constructor(game) {
    super(game, "Phantasmal Forces", "Fourth Edition", "4ED");
  }
}

module.exports = PhantasmalForces;
