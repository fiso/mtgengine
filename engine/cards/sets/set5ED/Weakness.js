"use strict";
const Constants = require ("../../../Constants");
const WeaknessBase = require("../setBRB/Weakness");

class Weakness extends WeaknessBase {
  constructor(game) {
    super(game, "Weakness", "Fifth Edition", "5ED");
  }
}

module.exports = Weakness;
