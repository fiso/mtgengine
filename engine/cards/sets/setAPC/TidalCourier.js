"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidalCourier extends Card {
  constructor(game) {
    super(game, "Tidal Courier", "Apocalypse", "APC");
  }
}

module.exports = TidalCourier;
