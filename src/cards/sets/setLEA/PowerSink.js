"use strict";
const Constants = require ("../../../Constants");
const PowerSinkBase = require("../setVMA/PowerSink");

class PowerSink extends PowerSinkBase {
  constructor (game) {
    super(game, "Power Sink", "Limited Edition Alpha", "LEA");
  }
}

module.exports = PowerSink;
