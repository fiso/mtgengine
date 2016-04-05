"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setCHR/Boomerang");

class Boomerang extends BoomerangBase {
  constructor(game) {
    super(game, "Boomerang", "Tenth Edition", "10E");
  }
}

module.exports = Boomerang;
