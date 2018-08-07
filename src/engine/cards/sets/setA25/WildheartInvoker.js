"use strict";
const Constants = require ("../../../Constants");
const WildheartInvokerBase = require("../setDDU/WildheartInvoker");

class WildheartInvoker extends WildheartInvokerBase {
  constructor (game) {
    super(game, "Wildheart Invoker", "Masters 25", "A25");
  }
}

module.exports = WildheartInvoker;
