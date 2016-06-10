"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TravelersCloak extends UnimplementedCard {
  constructor (game) {
    super(game, "Traveler's Cloak", "Invasion", "INV");
  }
}

module.exports = TravelersCloak;
