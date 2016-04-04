"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlightedCataract extends Card {
  constructor(game) {
    super(game, "Blighted Cataract", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedCataract;
