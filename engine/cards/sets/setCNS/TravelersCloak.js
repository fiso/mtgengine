"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TravelersCloakBase = require("../setINV/TravelersCloak.js");

class TravelersCloak extends TravelersCloakBase {
  constructor(game) {
    super(game, "Traveler's Cloak", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TravelersCloak;
