"use strict";
const Constants = require ("../../../Constants");
const WeaknessBase = require("../setBRB/Weakness");

class Weakness extends WeaknessBase {
  constructor(game) {
    super(game, "Weakness", "Collector's Edition", "CED");
  }
}

module.exports = Weakness;
