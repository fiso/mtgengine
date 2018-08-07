"use strict";
const Constants = require ("../../../Constants");
const RuthlessRipperBase = require("../setA25/RuthlessRipper");

class RuthlessRipper extends RuthlessRipperBase {
  constructor (game) {
    super(game, "Ruthless Ripper", "Ugin's Fate", "UGIN");
  }
}

module.exports = RuthlessRipper;
