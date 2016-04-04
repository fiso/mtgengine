"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildheartInvokerBase = require("../setDDP/WildheartInvoker.js");

class WildheartInvoker extends WildheartInvokerBase {
  constructor(game) {
    super(game, "Wildheart Invoker", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = WildheartInvoker;
