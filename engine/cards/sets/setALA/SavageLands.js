"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SavageLandsBase = require("../setC13/SavageLands.js");

class SavageLands extends SavageLandsBase {
  constructor(game) {
    super(game, "Savage Lands", "Shards of Alara", "ALA");
  }
}

module.exports = SavageLands;
