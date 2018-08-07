"use strict";
const Constants = require ("../../../Constants");
const FortifyBase = require("../setMM2/Fortify");

class Fortify extends FortifyBase {
  constructor (game) {
    super(game, "Fortify", "Magic 2014", "M14");
  }
}

module.exports = Fortify;
