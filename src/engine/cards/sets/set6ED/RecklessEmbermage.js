"use strict";
const Constants = require ("../../../Constants");
const RecklessEmbermageBase = require("../set7ED/RecklessEmbermage");

class RecklessEmbermage extends RecklessEmbermageBase {
  constructor (game) {
    super(game, "Reckless Embermage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RecklessEmbermage;
