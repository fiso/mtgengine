"use strict";
const Constants = require ("../../../Constants");
const StifleBase = require("../setpJGP/Stifle");

class Stifle extends StifleBase {
  constructor(game) {
    super(game, "Stifle", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Stifle;
