"use strict";
const Constants = require ("../../../Constants");
const PowerSinkBase = require("../setBTD/PowerSink");

class PowerSink extends PowerSinkBase {
  constructor (game) {
    super(game, "Power Sink", "Collector's Edition", "CED");
  }
}

module.exports = PowerSink;
