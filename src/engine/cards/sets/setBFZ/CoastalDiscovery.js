"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoastalDiscovery extends UnimplementedCard {
  constructor (game) {
    super(game, "Coastal Discovery", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CoastalDiscovery;
