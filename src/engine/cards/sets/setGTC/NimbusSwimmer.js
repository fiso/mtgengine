"use strict";
const Constants = require ("../../../Constants");
const NimbusSwimmerBase = require("../setDDO/NimbusSwimmer");

class NimbusSwimmer extends NimbusSwimmerBase {
  constructor (game) {
    super(game, "Nimbus Swimmer", "Gatecrash", "GTC");
  }
}

module.exports = NimbusSwimmer;
