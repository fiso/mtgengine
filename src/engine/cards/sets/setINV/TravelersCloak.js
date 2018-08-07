"use strict";
const Constants = require ("../../../Constants");
const TravelersCloakBase = require("../setCNS/TravelersCloak");

class TravelersCloak extends TravelersCloakBase {
  constructor (game) {
    super(game, "Traveler's Cloak", "Invasion", "INV");
  }
}

module.exports = TravelersCloak;
