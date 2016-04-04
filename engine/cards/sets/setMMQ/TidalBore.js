"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidalBore extends Card {
  constructor(game) {
    super(game, "Tidal Bore", "Mercadian Masques", "MMQ");
  }
}

module.exports = TidalBore;
