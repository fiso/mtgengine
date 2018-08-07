"use strict";
const Constants = require ("../../../Constants");
const SkysovereignConsulFlagshipBase = require("../setKLD/SkysovereignConsulFlagship");

class SkysovereignConsulFlagship extends SkysovereignConsulFlagshipBase {
  constructor (game) {
    super(game, "Skysovereign, Consul Flagship", "Kaladesh Promos", "PKLD");
  }
}

module.exports = SkysovereignConsulFlagship;
