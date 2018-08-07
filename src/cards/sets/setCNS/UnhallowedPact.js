"use strict";
const Constants = require ("../../../Constants");
const UnhallowedPactBase = require("../setDDR/UnhallowedPact");

class UnhallowedPact extends UnhallowedPactBase {
  constructor (game) {
    super(game, "Unhallowed Pact", "Conspiracy", "CNS");
  }
}

module.exports = UnhallowedPact;
