"use strict";
const Constants = require ("../../../Constants");
const RecklessEmbermageBase = require("../set6ED/RecklessEmbermage");

class RecklessEmbermage extends RecklessEmbermageBase {
  constructor (game) {
    super(game, "Reckless Embermage", "Mirage", "MIR");
  }
}

module.exports = RecklessEmbermage;
