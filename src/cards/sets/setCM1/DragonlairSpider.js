"use strict";
const Constants = require ("../../../Constants");
const DragonlairSpiderBase = require("../setPCA/DragonlairSpider");

class DragonlairSpider extends DragonlairSpiderBase {
  constructor (game) {
    super(game, "Dragonlair Spider", "Commander's Arsenal", "CM1");
  }
}

module.exports = DragonlairSpider;
