"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonlairSpiderBase = require("../setCM1/DragonlairSpider.js");

class DragonlairSpider extends DragonlairSpiderBase {
  constructor(game) {
    super(game, "Dragonlair Spider", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = DragonlairSpider;
