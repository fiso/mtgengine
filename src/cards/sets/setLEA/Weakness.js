"use strict";
const Constants = require ("../../../Constants");
const WeaknessBase = require("../setME4/Weakness");

class Weakness extends WeaknessBase {
  constructor (game) {
    super(game, "Weakness", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Weakness;
