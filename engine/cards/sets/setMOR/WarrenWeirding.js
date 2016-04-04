"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarrenWeirdingBase = require("../setMMA/WarrenWeirding.js");

class WarrenWeirding extends WarrenWeirdingBase {
  constructor(game) {
    super(game, "Warren Weirding", "Morningtide", "MOR");
  }
}

module.exports = WarrenWeirding;
