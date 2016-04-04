"use strict";
const Constants = require ("../../../Constants");
const AngelofLightBase = require("../setME2/AngelofLight");

class AngelofLight extends AngelofLightBase {
  constructor(game) {
    super(game, "Angel of Light", "Starter 1999", "S99");
  }
}

module.exports = AngelofLight;
