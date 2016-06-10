"use strict";
const Constants = require ("../../../Constants");
const HeavyFogBase = require("../setME3/HeavyFog");

class HeavyFog extends HeavyFogBase {
  constructor (game) {
    super(game, "Heavy Fog", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = HeavyFog;
