"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DealBroker extends Card {
  constructor(game) {
    super(game, "Deal Broker", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DealBroker;
