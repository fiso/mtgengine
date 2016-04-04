"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidalSurge extends Card {
  constructor(game) {
    super(game, "Tidal Surge", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TidalSurge;
