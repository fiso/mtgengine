"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonMageBase = require("../setC15/DragonMage.js");

class DragonMage extends DragonMageBase {
  constructor(game) {
    super(game, "Dragon Mage", "Scourge", "SCG");
  }
}

module.exports = DragonMage;
