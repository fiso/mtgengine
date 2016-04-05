"use strict";
const Constants = require ("../../../Constants");
const HeartofLightBase = require("../setBOK/HeartofLight");

class HeartofLight extends HeartofLightBase {
  constructor(game) {
    super(game, "Heart of Light", "Tenth Edition", "10E");
  }
}

module.exports = HeartofLight;
