"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalustradeSpy extends UnimplementedCard {
  constructor(game) {
    super(game, "Balustrade Spy", "Gatecrash", "GTC");
  }
}

module.exports = BalustradeSpy;
