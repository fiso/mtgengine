"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyshipWeatherlight extends Card {
  constructor(game) {
    super(game, "Skyship Weatherlight", "Planeshift", "PLS");
  }
}

module.exports = SkyshipWeatherlight;
