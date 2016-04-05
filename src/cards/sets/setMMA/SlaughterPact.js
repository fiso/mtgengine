"use strict";
const Constants = require ("../../../Constants");
const SlaughterPactBase = require("../setFUT/SlaughterPact");

class SlaughterPact extends SlaughterPactBase {
  constructor(game) {
    super(game, "Slaughter Pact", "Modern Masters", "MMA");
  }
}

module.exports = SlaughterPact;
