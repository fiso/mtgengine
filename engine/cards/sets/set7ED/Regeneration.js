"use strict";
const Constants = require ("../../../Constants");
const RegenerationBase = require("../set6ED/Regeneration");

class Regeneration extends RegenerationBase {
  constructor(game) {
    super(game, "Regeneration", "Seventh Edition", "7ED");
  }
}

module.exports = Regeneration;
