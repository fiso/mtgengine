"use strict";
const Constants = require ("../../../Constants");
const FortifyBase = require("../setMM2/Fortify");

class Fortify extends FortifyBase {
  constructor (game) {
    super(game, "Fortify", "Time Spiral", "TSP");
  }
}

module.exports = Fortify;
