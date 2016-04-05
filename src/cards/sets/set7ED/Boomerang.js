"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setCHR/Boomerang");

class Boomerang extends BoomerangBase {
  constructor(game) {
    super(game, "Boomerang", "Seventh Edition", "7ED");
  }
}

module.exports = Boomerang;
