"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TravelersAmuletBase = require("../setISD/TravelersAmulet.js");

class TravelersAmulet extends TravelersAmuletBase {
  constructor(game) {
    super(game, "Traveler's Amulet", "Theros", "THS");
  }
}

module.exports = TravelersAmulet;
