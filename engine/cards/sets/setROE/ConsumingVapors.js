"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumingVapors extends Card {
  constructor(game) {
    super(game, "Consuming Vapors", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ConsumingVapors;
