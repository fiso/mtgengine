"use strict";
const Constants = require ("../../../Constants");
const SouthernElephantBase = require("../setME4/SouthernElephant");

class SouthernElephant extends SouthernElephantBase {
  constructor(game) {
    super(game, "Southern Elephant", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = SouthernElephant;
