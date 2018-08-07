"use strict";
const Constants = require ("../../../Constants");
const SlaughterPactBase = require("../setMP2/SlaughterPact");

class SlaughterPact extends SlaughterPactBase {
  constructor (game) {
    super(game, "Slaughter Pact", "Future Sight", "FUT");
  }
}

module.exports = SlaughterPact;
