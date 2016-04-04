"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlaughterPactBase = require("../setFUT/SlaughterPact.js");

class SlaughterPact extends SlaughterPactBase {
  constructor(game) {
    super(game, "Slaughter Pact", "Modern Masters", "MMA");
  }
}

module.exports = SlaughterPact;
