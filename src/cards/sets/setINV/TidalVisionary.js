"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalVisionary extends UnimplementedCard {
  constructor(game) {
    super(game, "Tidal Visionary", "Invasion", "INV");
  }
}

module.exports = TidalVisionary;
