"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumingAberration extends UnimplementedCard {
  constructor(game) {
    super(game, "Consuming Aberration", "Gatecrash", "GTC");
  }
}

module.exports = ConsumingAberration;
