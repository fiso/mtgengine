"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TravelersAmulet extends UnimplementedCard {
  constructor(game) {
    super(game, "Traveler's Amulet", "Innistrad", "ISD");
  }
}

module.exports = TravelersAmulet;
