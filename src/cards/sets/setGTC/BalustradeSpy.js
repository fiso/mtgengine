"use strict";
const Constants = require ("../../../Constants");
const BalustradeSpyBase = require("../setIMA/BalustradeSpy");

class BalustradeSpy extends BalustradeSpyBase {
  constructor (game) {
    super(game, "Balustrade Spy", "Gatecrash", "GTC");
  }
}

module.exports = BalustradeSpy;
