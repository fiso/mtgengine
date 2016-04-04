"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PowerSinkBase = require("../setBTD/PowerSink.js");

class PowerSink extends PowerSinkBase {
  constructor(game) {
    super(game, "Power Sink", "Limited Edition Alpha", "LEA");
  }
}

module.exports = PowerSink;
