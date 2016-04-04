"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LlanowarSentinelBase = require("../set10E/LlanowarSentinel.js");

class LlanowarSentinel extends LlanowarSentinelBase {
  constructor(game) {
    super(game, "Llanowar Sentinel", "Weatherlight", "WTH");
  }
}

module.exports = LlanowarSentinel;
