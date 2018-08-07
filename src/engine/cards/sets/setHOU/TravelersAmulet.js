"use strict";
const Constants = require ("../../../Constants");
const TravelersAmuletBase = require("../setRIX/TravelersAmulet");

class TravelersAmulet extends TravelersAmuletBase {
  constructor (game) {
    super(game, "Traveler's Amulet", "Hour of Devastation", "HOU");
  }
}

module.exports = TravelersAmulet;
