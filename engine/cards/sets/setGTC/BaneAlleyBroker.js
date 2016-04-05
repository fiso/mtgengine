"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaneAlleyBroker extends UnimplementedCard {
  constructor(game) {
    super(game, "Bane Alley Broker", "Gatecrash", "GTC");
  }
}

module.exports = BaneAlleyBroker;
