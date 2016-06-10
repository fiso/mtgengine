"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhosthelmCourier extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghosthelm Courier", "Onslaught", "ONS");
  }
}

module.exports = GhosthelmCourier;
