"use strict";
const Constants = require ("../../../Constants");
const SilverchaseFoxBase = require("../setISD/SilverchaseFox");

class SilverchaseFox extends SilverchaseFoxBase {
  constructor (game) {
    super(game, "Silverchase Fox", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SilverchaseFox;
