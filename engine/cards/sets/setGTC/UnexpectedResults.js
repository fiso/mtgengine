"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnexpectedResults extends UnimplementedCard {
  constructor(game) {
    super(game, "Unexpected Results", "Gatecrash", "GTC");
  }
}

module.exports = UnexpectedResults;
