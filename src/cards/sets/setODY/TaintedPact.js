"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedPact extends UnimplementedCard {
  constructor(game) {
    super(game, "Tainted Pact", "Odyssey", "ODY");
  }
}

module.exports = TaintedPact;
