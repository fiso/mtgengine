"use strict";
const Constants = require ("../../../Constants");
const FoundryStreetDenizenBase = require("../setGTC/FoundryStreetDenizen");

class FoundryStreetDenizen extends FoundryStreetDenizenBase {
  constructor(game) {
    super(game, "Foundry Street Denizen", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FoundryStreetDenizen;
