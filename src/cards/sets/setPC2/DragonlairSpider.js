"use strict";
const Constants = require ("../../../Constants");
const DragonlairSpiderBase = require("../setPCA/DragonlairSpider");

class DragonlairSpider extends DragonlairSpiderBase {
  constructor (game) {
    super(game, "Dragonlair Spider", "Planechase 2012", "PC2");
  }
}

module.exports = DragonlairSpider;
