"use strict";
const Constants = require ("../../../Constants");
const DragonlairSpiderBase = require("../setPCA/DragonlairSpider");

class DragonlairSpider extends DragonlairSpiderBase {
  constructor (game) {
    super(game, "Dragonlair Spider", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = DragonlairSpider;
