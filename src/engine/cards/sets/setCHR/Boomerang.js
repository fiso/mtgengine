"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setDPA/Boomerang");

class Boomerang extends BoomerangBase {
  constructor (game) {
    super(game, "Boomerang", "Chronicles", "CHR");
  }
}

module.exports = Boomerang;
