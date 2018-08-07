"use strict";
const Constants = require ("../../../Constants");
const KindredDiscoveryBase = require("../setC17/KindredDiscovery");

class KindredDiscovery extends KindredDiscoveryBase {
  constructor (game) {
    super(game, "Kindred Discovery", "You Make the Cube", "PZ2");
  }
}

module.exports = KindredDiscovery;
