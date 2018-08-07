"use strict";
const Constants = require ("../../../Constants");
const SkyshipWeatherlightBase = require("../setPRM/SkyshipWeatherlight");

class SkyshipWeatherlight extends SkyshipWeatherlightBase {
  constructor (game) {
    super(game, "Skyship Weatherlight", "Planeshift", "PLS");
  }
}

module.exports = SkyshipWeatherlight;
