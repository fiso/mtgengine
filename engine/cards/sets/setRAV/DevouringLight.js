"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DevouringLightBase = require("../setM15/DevouringLight.js");

class DevouringLight extends DevouringLightBase {
  constructor(game) {
    super(game, "Devouring Light", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DevouringLight;
