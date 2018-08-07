"use strict";
const Constants = require ("../../../Constants");
const ConsumingAberrationBase = require("../setC16/ConsumingAberration");

class ConsumingAberration extends ConsumingAberrationBase {
  constructor (game) {
    super(game, "Consuming Aberration", "Gatecrash", "GTC");
  }
}

module.exports = ConsumingAberration;
