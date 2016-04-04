"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowerSink extends Card {
  constructor(game) {
    super(game, "Power Sink", "Beatdown Box Set", "BTD");
  }
}

module.exports = PowerSink;
