"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelesnyaCluestone extends UnimplementedCard {
  constructor (game) {
    super(game, "Selesnya Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = SelesnyaCluestone;
