"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedCataract extends UnimplementedCard {
  constructor(game) {
    super(game, "Blighted Cataract", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedCataract;
