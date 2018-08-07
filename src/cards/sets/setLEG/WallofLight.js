"use strict";
const Constants = require ("../../../Constants");
const WallofLightBase = require("../setME3/WallofLight");

class WallofLight extends WallofLightBase {
  constructor (game) {
    super(game, "Wall of Light", "Legends", "LEG");
  }
}

module.exports = WallofLight;
