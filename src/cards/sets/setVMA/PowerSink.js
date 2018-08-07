"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerSink extends UnimplementedCard {
  constructor (game) {
    super(game, "Power Sink", "Vintage Masters", "VMA");
  }
}

module.exports = PowerSink;
