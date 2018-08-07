"use strict";
const Constants = require ("../../../Constants");
const GenesisChamberBase = require("../setBBD/GenesisChamber");

class GenesisChamber extends GenesisChamberBase {
  constructor (game) {
    super(game, "Genesis Chamber", "Darksteel", "DST");
  }
}

module.exports = GenesisChamber;
