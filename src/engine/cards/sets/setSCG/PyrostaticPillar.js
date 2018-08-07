"use strict";
const Constants = require ("../../../Constants");
const PyrostaticPillarBase = require("../setTD0/PyrostaticPillar");

class PyrostaticPillar extends PyrostaticPillarBase {
  constructor (game) {
    super(game, "Pyrostatic Pillar", "Scourge", "SCG");
  }
}

module.exports = PyrostaticPillar;
