"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecklessEmbermageBase = require("../set6ED/RecklessEmbermage.js");

class RecklessEmbermage extends RecklessEmbermageBase {
  constructor(game) {
    super(game, "Reckless Embermage", "Mirage", "MIR");
  }
}

module.exports = RecklessEmbermage;
