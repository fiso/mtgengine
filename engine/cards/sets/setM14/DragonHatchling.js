"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonHatchlingBase = require("../setM13/DragonHatchling.js");

class DragonHatchling extends DragonHatchlingBase {
  constructor(game) {
    super(game, "Dragon Hatchling", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DragonHatchling;
