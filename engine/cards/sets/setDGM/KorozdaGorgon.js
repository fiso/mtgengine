"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorozdaGorgon extends Card {
  constructor(game) {
    super(game, "Korozda Gorgon", "Dragon's Maze", "DGM");
  }
}

module.exports = KorozdaGorgon;
