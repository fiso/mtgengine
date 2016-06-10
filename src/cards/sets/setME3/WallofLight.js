"use strict";
const Constants = require ("../../../Constants");
const WallofLightBase = require("../setLEG/WallofLight");

class WallofLight extends WallofLightBase {
  constructor (game) {
    super(game, "Wall of Light", "Masters Edition III", "ME3");
  }
}

module.exports = WallofLight;
