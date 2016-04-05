"use strict";
const Constants = require ("../../../Constants");
const LlanowarSentinelBase = require("../set10E/LlanowarSentinel");

class LlanowarSentinel extends LlanowarSentinelBase {
  constructor(game) {
    super(game, "Llanowar Sentinel", "Weatherlight", "WTH");
  }
}

module.exports = LlanowarSentinel;
