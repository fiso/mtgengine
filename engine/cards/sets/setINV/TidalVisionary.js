"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidalVisionary extends Card {
  constructor(game) {
    super(game, "Tidal Visionary", "Invasion", "INV");
  }
}

module.exports = TidalVisionary;
