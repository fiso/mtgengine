"use strict";
const Constants = require ("../../../Constants");
const WeaknessBase = require("../setBRB/Weakness");

class Weakness extends WeaknessBase {
  constructor (game) {
    super(game, "Weakness", "Masters Edition IV", "ME4");
  }
}

module.exports = Weakness;
