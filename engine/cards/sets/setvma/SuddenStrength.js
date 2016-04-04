"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuddenStrengthBase = require("../setJUD/SuddenStrength.js");

class SuddenStrength extends SuddenStrengthBase {
  constructor(game) {
    super(game, "Sudden Strength", "Vintage Masters", "VMA");
  }
}

module.exports = SuddenStrength;
