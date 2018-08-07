"use strict";
const Constants = require ("../../../Constants");
const SmallpoxBase = require("../setDDR/Smallpox");

class Smallpox extends SmallpoxBase {
  constructor (game) {
    super(game, "Smallpox", "Conspiracy", "CNS");
  }
}

module.exports = Smallpox;
