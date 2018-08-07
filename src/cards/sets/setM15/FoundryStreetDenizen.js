"use strict";
const Constants = require ("../../../Constants");
const FoundryStreetDenizenBase = require("../setDDT/FoundryStreetDenizen");

class FoundryStreetDenizen extends FoundryStreetDenizenBase {
  constructor (game) {
    super(game, "Foundry Street Denizen", "Magic 2015", "M15");
  }
}

module.exports = FoundryStreetDenizen;
