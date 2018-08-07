"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DealBroker extends UnimplementedCard {
  constructor (game) {
    super(game, "Deal Broker", "Conspiracy", "CNS");
  }
}

module.exports = DealBroker;
