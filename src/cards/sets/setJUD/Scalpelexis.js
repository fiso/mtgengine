"use strict";
const Constants = require ("../../../Constants");
const ScalpelexisBase = require("../set10E/Scalpelexis");

class Scalpelexis extends ScalpelexisBase {
  constructor (game) {
    super(game, "Scalpelexis", "Judgment", "JUD");
  }
}

module.exports = Scalpelexis;
