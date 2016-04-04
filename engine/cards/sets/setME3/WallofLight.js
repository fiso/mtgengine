"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofLightBase = require("../setLEG/WallofLight.js");

class WallofLight extends WallofLightBase {
  constructor(game) {
    super(game, "Wall of Light", "Masters Edition III", "ME3");
  }
}

module.exports = WallofLight;
