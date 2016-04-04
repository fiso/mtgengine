"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FleetfootPanther extends Card {
  constructor(game) {
    super(game, "Fleetfoot Panther", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = FleetfootPanther;
