"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BaneAlleyBroker extends Card {
  constructor(game) {
    super(game, "Bane Alley Broker", "Gatecrash", "GTC");
  }
}

module.exports = BaneAlleyBroker;
