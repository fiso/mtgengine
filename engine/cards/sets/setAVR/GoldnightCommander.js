"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldnightCommander extends Card {
  constructor(game) {
    super(game, "Goldnight Commander", "Avacyn Restored", "AVR");
  }
}

module.exports = GoldnightCommander;
