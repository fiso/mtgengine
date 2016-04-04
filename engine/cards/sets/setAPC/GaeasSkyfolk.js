"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasSkyfolk extends Card {
  constructor(game) {
    super(game, "Gaea's Skyfolk", "Apocalypse", "APC");
  }
}

module.exports = GaeasSkyfolk;
