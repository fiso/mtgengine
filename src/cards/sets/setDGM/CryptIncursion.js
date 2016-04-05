"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptIncursion extends UnimplementedCard {
  constructor(game) {
    super(game, "Crypt Incursion", "Dragon's Maze", "DGM");
  }
}

module.exports = CryptIncursion;
