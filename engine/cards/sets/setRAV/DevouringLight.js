"use strict";
const Constants = require ("../../../Constants");
const DevouringLightBase = require("../setM15/DevouringLight");

class DevouringLight extends DevouringLightBase {
  constructor(game) {
    super(game, "Devouring Light", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DevouringLight;
