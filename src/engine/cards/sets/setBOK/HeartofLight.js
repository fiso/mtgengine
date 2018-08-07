"use strict";
const Constants = require ("../../../Constants");
const HeartofLightBase = require("../set10E/HeartofLight");

class HeartofLight extends HeartofLightBase {
  constructor (game) {
    super(game, "Heart of Light", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HeartofLight;
