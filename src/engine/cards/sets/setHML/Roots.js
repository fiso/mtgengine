"use strict";
const Constants = require ("../../../Constants");
const RootsBase = require("../setEMA/Roots");

class Roots extends RootsBase {
  constructor (game) {
    super(game, "Roots", "Homelands", "HML");
  }
}

module.exports = Roots;
