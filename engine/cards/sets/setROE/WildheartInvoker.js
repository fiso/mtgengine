"use strict";
const Constants = require ("../../../Constants");
const WildheartInvokerBase = require("../setDDP/WildheartInvoker");

class WildheartInvoker extends WildheartInvokerBase {
  constructor(game) {
    super(game, "Wildheart Invoker", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = WildheartInvoker;
