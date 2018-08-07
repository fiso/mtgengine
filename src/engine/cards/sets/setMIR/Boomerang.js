"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setDPA/Boomerang");

class Boomerang extends BoomerangBase {
  constructor (game) {
    super(game, "Boomerang", "Mirage", "MIR");
  }
}

module.exports = Boomerang;
