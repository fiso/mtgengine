"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LawlessBroker extends UnimplementedCard {
  constructor (game) {
    super(game, "Lawless Broker", "Kaladesh", "KLD");
  }
}

module.exports = LawlessBroker;
