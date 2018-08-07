"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlaughterPact extends UnimplementedCard {
  constructor (game) {
    super(game, "Slaughter Pact", "Amonkhet Invocations", "MP2");
  }
}

module.exports = SlaughterPact;
