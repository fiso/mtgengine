"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GleamingBarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Gleaming Barrier", "Rivals of Ixalan", "RIX");
  }
}

module.exports = GleamingBarrier;
