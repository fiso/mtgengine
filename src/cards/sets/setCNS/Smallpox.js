"use strict";
const Constants = require ("../../../Constants");
const SmallpoxBase = require("../setM12/Smallpox");

class Smallpox extends SmallpoxBase {
  constructor (game) {
    super(game, "Smallpox", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Smallpox;
