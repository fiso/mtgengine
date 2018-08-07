"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TravelersAmulet extends UnimplementedCard {
  constructor (game) {
    super(game, "Traveler's Amulet", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TravelersAmulet;
