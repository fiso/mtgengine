"use strict";
const Constants = require ("../../../Constants");
const ScalpelexisBase = require("../setJUD/Scalpelexis");

class Scalpelexis extends ScalpelexisBase {
  constructor (game) {
    super(game, "Scalpelexis", "Tenth Edition", "10E");
  }
}

module.exports = Scalpelexis;
