"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnhallowedPact extends UnimplementedCard {
  constructor (game) {
    super(game, "Unhallowed Pact", "Avacyn Restored", "AVR");
  }
}

module.exports = UnhallowedPact;
