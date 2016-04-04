"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NimbusSwimmerBase = require("../setDDO/NimbusSwimmer.js");

class NimbusSwimmer extends NimbusSwimmerBase {
  constructor(game) {
    super(game, "Nimbus Swimmer", "Gatecrash", "GTC");
  }
}

module.exports = NimbusSwimmer;
