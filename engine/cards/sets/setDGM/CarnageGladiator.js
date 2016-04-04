"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarnageGladiator extends Card {
  constructor(game) {
    super(game, "Carnage Gladiator", "Dragon's Maze", "DGM");
  }
}

module.exports = CarnageGladiator;
