"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setCHR/Boomerang");

class Boomerang extends BoomerangBase {
  constructor (game) {
    super(game, "Boomerang", "Eighth Edition", "8ED");
  }
}

module.exports = Boomerang;
