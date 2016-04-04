"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeartofLightBase = require("../setBOK/HeartofLight.js");

class HeartofLight extends HeartofLightBase {
  constructor(game) {
    super(game, "Heart of Light", "Tenth Edition", "10E");
  }
}

module.exports = HeartofLight;
