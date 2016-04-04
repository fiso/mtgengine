"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GargantuanGorilla extends Card {
  constructor(game) {
    super(game, "Gargantuan Gorilla", "Alliances", "ALL");
  }
}

module.exports = GargantuanGorilla;
