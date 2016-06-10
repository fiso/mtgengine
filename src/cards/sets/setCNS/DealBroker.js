"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DealBroker extends UnimplementedCard {
  constructor (game) {
    super(game, "Deal Broker", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DealBroker;
