"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarleadersHelix extends Card {
  constructor(game) {
    super(game, "Warleader's Helix", "Dragon's Maze", "DGM");
  }
}

module.exports = WarleadersHelix;
