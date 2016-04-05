"use strict";
const Constants = require ("../../../Constants");
const ManaCylixBase = require("../setCON/ManaCylix");

class ManaCylix extends ManaCylixBase {
  constructor(game) {
    super(game, "Mana Cylix", "Planeshift", "PLS");
  }
}

module.exports = ManaCylix;
