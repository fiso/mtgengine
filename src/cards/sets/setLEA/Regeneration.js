"use strict";
const Constants = require ("../../../Constants");
const RegenerationBase = require("../set6ED/Regeneration");

class Regeneration extends RegenerationBase {
  constructor(game) {
    super(game, "Regeneration", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Regeneration;
