"use strict";
const Constants = require ("../../../Constants");
const WeaknessBase = require("../setBRB/Weakness");

class Weakness extends WeaknessBase {
  constructor(game) {
    super(game, "Weakness", "Unlimited Edition", "2ED");
  }
}

module.exports = Weakness;
