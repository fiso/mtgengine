"use strict";
const Constants = require ("../../../Constants");
const SilverchaseFoxBase = require("../setBBD/SilverchaseFox");

class SilverchaseFox extends SilverchaseFoxBase {
  constructor (game) {
    super(game, "Silverchase Fox", "Conspiracy", "CNS");
  }
}

module.exports = SilverchaseFox;
