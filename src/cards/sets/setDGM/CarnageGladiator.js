"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnageGladiator extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnage Gladiator", "Dragon's Maze", "DGM");
  }
}

module.exports = CarnageGladiator;
