"use strict";
const Constants = require ("../../../Constants");
const UnhallowedPactBase = require("../setDDR/UnhallowedPact");

class UnhallowedPact extends UnhallowedPactBase {
  constructor (game) {
    super(game, "Unhallowed Pact", "Avacyn Restored", "AVR");
  }
}

module.exports = UnhallowedPact;
