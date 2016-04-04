"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrowninFilth extends Card {
  constructor(game) {
    super(game, "Drown in Filth", "Dragon's Maze", "DGM");
  }
}

module.exports = DrowninFilth;
