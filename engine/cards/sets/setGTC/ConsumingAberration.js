"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumingAberration extends Card {
  constructor(game) {
    super(game, "Consuming Aberration", "Gatecrash", "GTC");
  }
}

module.exports = ConsumingAberration;
