"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetfootPanther extends UnimplementedCard {
  constructor(game) {
    super(game, "Fleetfoot Panther", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = FleetfootPanther;
