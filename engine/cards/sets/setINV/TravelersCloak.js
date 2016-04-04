"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TravelersCloak extends Card {
  constructor(game) {
    super(game, "Traveler's Cloak", "Invasion", "INV");
  }
}

module.exports = TravelersCloak;
