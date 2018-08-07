"use strict";
const Constants = require ("../../../Constants");
const WeaknessBase = require("../setME4/Weakness");

class Weakness extends WeaknessBase {
  constructor (game) {
    super(game, "Weakness", "Unlimited Edition", "2ED");
  }
}

module.exports = Weakness;
