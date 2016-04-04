"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhosthelmCourier extends Card {
  constructor(game) {
    super(game, "Ghosthelm Courier", "Onslaught", "ONS");
  }
}

module.exports = GhosthelmCourier;
