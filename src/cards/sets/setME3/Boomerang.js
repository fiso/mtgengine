"use strict";
const Constants = require ("../../../Constants");
const BoomerangBase = require("../setDPA/Boomerang");

class Boomerang extends BoomerangBase {
  constructor (game) {
    super(game, "Boomerang", "Masters Edition III", "ME3");
  }
}

module.exports = Boomerang;
