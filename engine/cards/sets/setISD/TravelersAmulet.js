"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TravelersAmulet extends Card {
  constructor(game) {
    super(game, "Traveler's Amulet", "Innistrad", "ISD");
  }
}

module.exports = TravelersAmulet;
