"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RamosianCommander extends Card {
  constructor(game) {
    super(game, "Ramosian Commander", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianCommander;
