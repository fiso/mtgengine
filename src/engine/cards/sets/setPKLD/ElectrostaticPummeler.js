"use strict";
const Constants = require ("../../../Constants");
const ElectrostaticPummelerBase = require("../setKLD/ElectrostaticPummeler");

class ElectrostaticPummeler extends ElectrostaticPummelerBase {
  constructor (game) {
    super(game, "Electrostatic Pummeler", "Kaladesh Promos", "PKLD");
  }
}

module.exports = ElectrostaticPummeler;
