"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasSkyfolk extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaea's Skyfolk", "Apocalypse", "APC");
  }
}

module.exports = GaeasSkyfolk;
