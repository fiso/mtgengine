"use strict";
const Constants = require ("../../../Constants");
const PowerSinkBase = require("../setVMA/PowerSink");

class PowerSink extends PowerSinkBase {
  constructor (game) {
    super(game, "Power Sink", "Tempest", "TMP");
  }
}

module.exports = PowerSink;
