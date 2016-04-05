"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhastlyDiscovery extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghastly Discovery", "Shadowmoor", "SHM");
  }
}

module.exports = GhastlyDiscovery;
