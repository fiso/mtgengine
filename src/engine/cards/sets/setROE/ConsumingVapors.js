"use strict";
const Constants = require ("../../../Constants");
const ConsumingVaporsBase = require("../setC17/ConsumingVapors");

class ConsumingVapors extends ConsumingVaporsBase {
  constructor (game) {
    super(game, "Consuming Vapors", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ConsumingVapors;
