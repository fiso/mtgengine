"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SavageLandsBase = require("../setC13/SavageLands.js");

class SavageLands extends SavageLandsBase {
  constructor(game) {
    super(game, "Savage Lands", "Friday Night Magic", "pFNM");
  }
}

module.exports = SavageLands;
