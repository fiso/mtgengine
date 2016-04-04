"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdarkarSentinel extends Card {
  constructor(game) {
    super(game, "Adarkar Sentinel", "Ice Age", "ICE");
  }
}

module.exports = AdarkarSentinel;
