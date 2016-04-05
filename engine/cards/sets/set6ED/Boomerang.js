"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setCHR/Boomerang");

class Boomerang extends BoomerangBase {
  constructor(game) {
    super(game, "Boomerang", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Boomerang;
