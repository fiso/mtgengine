"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorozdaGorgon extends UnimplementedCard {
  constructor (game) {
    super(game, "Korozda Gorgon", "Dragon's Maze", "DGM");
  }
}

module.exports = KorozdaGorgon;
