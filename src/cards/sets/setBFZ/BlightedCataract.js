"use strict";
const Constants = require ("../../../Constants");
const BlightedCataractBase = require("../setDDT/BlightedCataract");

class BlightedCataract extends BlightedCataractBase {
  constructor (game) {
    super(game, "Blighted Cataract", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedCataract;
