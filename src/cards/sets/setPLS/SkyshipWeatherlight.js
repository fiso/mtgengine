"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyshipWeatherlight extends UnimplementedCard {
  constructor(game) {
    super(game, "Skyship Weatherlight", "Planeshift", "PLS");
  }
}

module.exports = SkyshipWeatherlight;
