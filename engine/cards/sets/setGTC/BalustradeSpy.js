"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalustradeSpy extends Card {
  constructor(game) {
    super(game, "Balustrade Spy", "Gatecrash", "GTC");
  }
}

module.exports = BalustradeSpy;
