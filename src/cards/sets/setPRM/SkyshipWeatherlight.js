"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyshipWeatherlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyship Weatherlight", "Magic Online Promos", "PRM");
  }
}

module.exports = SkyshipWeatherlight;
