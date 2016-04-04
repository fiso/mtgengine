"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CryptIncursion extends Card {
  constructor(game) {
    super(game, "Crypt Incursion", "Dragon's Maze", "DGM");
  }
}

module.exports = CryptIncursion;
