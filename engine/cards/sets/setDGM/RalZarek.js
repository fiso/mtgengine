"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RalZarek extends Card {
  constructor(game) {
    super(game, "Ral Zarek", "Dragon's Maze", "DGM");
  }
}

module.exports = RalZarek;
