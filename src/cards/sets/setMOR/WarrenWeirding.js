"use strict";
const Constants = require ("../../../Constants");
const WarrenWeirdingBase = require("../setMMA/WarrenWeirding");

class WarrenWeirding extends WarrenWeirdingBase {
  constructor (game) {
    super(game, "Warren Weirding", "Morningtide", "MOR");
  }
}

module.exports = WarrenWeirding;
