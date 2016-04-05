"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumingVapors extends UnimplementedCard {
  constructor(game) {
    super(game, "Consuming Vapors", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ConsumingVapors;
