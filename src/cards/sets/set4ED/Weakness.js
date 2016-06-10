"use strict";
const Constants = require ("../../../Constants");
const WeaknessBase = require("../setBRB/Weakness");

class Weakness extends WeaknessBase {
  constructor (game) {
    super(game, "Weakness", "Fourth Edition", "4ED");
  }
}

module.exports = Weakness;
