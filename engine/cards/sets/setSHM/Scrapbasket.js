"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scrapbasket extends Card {
  constructor(game) {
    super(game, "Scrapbasket", "Shadowmoor", "SHM");
  }
}

module.exports = Scrapbasket;
