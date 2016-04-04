"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeavyFogBase = require("../setME3/HeavyFog.js");

class HeavyFog extends HeavyFogBase {
  constructor(game) {
    super(game, "Heavy Fog", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = HeavyFog;
