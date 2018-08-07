"use strict";
const Constants = require ("../../../Constants");
const DragonMageBase = require("../setC16/DragonMage");

class DragonMage extends DragonMageBase {
  constructor (game) {
    super(game, "Dragon Mage", "Scourge", "SCG");
  }
}

module.exports = DragonMage;
