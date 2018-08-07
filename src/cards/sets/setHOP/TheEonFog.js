"use strict";
const Constants = require ("../../../Constants");
const TheEonFogBase = require("../setPCA/TheEonFog");

class TheEonFog extends TheEonFogBase {
  constructor (game) {
    super(game, "The Eon Fog", "Planechase", "HOP");
  }
}

module.exports = TheEonFog;
