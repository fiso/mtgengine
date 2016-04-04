"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VenomousDragonfly extends Card {
  constructor(game) {
    super(game, "Venomous Dragonfly", "Mercadian Masques", "MMQ");
  }
}

module.exports = VenomousDragonfly;
