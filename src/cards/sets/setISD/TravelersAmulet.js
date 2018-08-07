"use strict";
const Constants = require ("../../../Constants");
const TravelersAmuletBase = require("../setRIX/TravelersAmulet");

class TravelersAmulet extends TravelersAmuletBase {
  constructor (game) {
    super(game, "Traveler's Amulet", "Innistrad", "ISD");
  }
}

module.exports = TravelersAmulet;
