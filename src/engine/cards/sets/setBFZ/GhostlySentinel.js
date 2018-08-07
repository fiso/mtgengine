"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlySentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Sentinel", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GhostlySentinel;
