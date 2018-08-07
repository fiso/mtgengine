"use strict";
const Constants = require ("../../../Constants");
const GrimDiscoveryBase = require("../setDDR/GrimDiscovery");

class GrimDiscovery extends GrimDiscoveryBase {
  constructor (game) {
    super(game, "Grim Discovery", "Zendikar", "ZEN");
  }
}

module.exports = GrimDiscovery;
