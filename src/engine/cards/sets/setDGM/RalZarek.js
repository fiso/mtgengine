"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RalZarek extends UnimplementedCard {
  constructor (game) {
    super(game, "Ral Zarek", "Dragon's Maze", "DGM");
  }
}

module.exports = RalZarek;
