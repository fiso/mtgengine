"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KraulWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Kraul Warrior", "Dragon's Maze", "DGM");
  }
}

module.exports = KraulWarrior;
