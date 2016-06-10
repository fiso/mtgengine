"use strict";
const Constants = require ("../../../Constants");
const PowerSinkBase = require("../setBTD/PowerSink");

class PowerSink extends PowerSinkBase {
  constructor (game) {
    super(game, "Power Sink", "International Collector's Edition", "CEI");
  }
}

module.exports = PowerSink;
