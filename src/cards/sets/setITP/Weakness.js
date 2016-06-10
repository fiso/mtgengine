"use strict";
const Constants = require ("../../../Constants");
const WeaknessBase = require("../setBRB/Weakness");

class Weakness extends WeaknessBase {
  constructor (game) {
    super(game, "Weakness", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Weakness;
