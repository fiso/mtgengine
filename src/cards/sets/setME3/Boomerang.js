"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setCHR/Boomerang");

class Boomerang extends BoomerangBase {
  constructor(game) {
    super(game, "Boomerang", "Masters Edition III", "ME3");
  }
}

module.exports = Boomerang;
