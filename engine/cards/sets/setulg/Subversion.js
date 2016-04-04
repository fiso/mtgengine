"use strict";
const Constants = require ("../../../Constants");
const SubversionBase = require("../setBRB/Subversion");

class Subversion extends SubversionBase {
  constructor(game) {
    super(game, "Subversion", "Urza's Legacy", "ULG");
  }
}

module.exports = Subversion;
