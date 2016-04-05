"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoundryStreetDenizen extends UnimplementedCard {
  constructor(game) {
    super(game, "Foundry Street Denizen", "Gatecrash", "GTC");
  }
}

module.exports = FoundryStreetDenizen;
