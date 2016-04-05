"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setCHR/Boomerang");

class Boomerang extends BoomerangBase {
  constructor(game) {
    super(game, "Boomerang", "Fifth Edition", "5ED");
  }
}

module.exports = Boomerang;
