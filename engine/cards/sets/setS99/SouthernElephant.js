"use strict";
const Constants = require ("../../../Constants");
const SouthernElephantBase = require("../setME4/SouthernElephant");

class SouthernElephant extends SouthernElephantBase {
  constructor(game) {
    super(game, "Southern Elephant", "Starter 1999", "S99");
  }
}

module.exports = SouthernElephant;
