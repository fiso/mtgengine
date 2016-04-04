"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SouthernElephantBase = require("../setME4/SouthernElephant.js");

class SouthernElephant extends SouthernElephantBase {
  constructor(game) {
    super(game, "Southern Elephant", "Starter 1999", "S99");
  }
}

module.exports = SouthernElephant;
