"use strict";
const Constants = require ("../../../Constants");
const TravelersAmuletBase = require("../setISD/TravelersAmulet");

class TravelersAmulet extends TravelersAmuletBase {
  constructor (game) {
    super(game, "Traveler's Amulet", "Theros", "THS");
  }
}

module.exports = TravelersAmulet;
