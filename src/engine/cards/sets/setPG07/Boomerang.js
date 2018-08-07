"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setDPA/Boomerang");

class Boomerang extends BoomerangBase {
  constructor (game) {
    super(game, "Boomerang", "Gateway 2007", "PG07");
  }
}

module.exports = Boomerang;
