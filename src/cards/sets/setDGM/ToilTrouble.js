"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToilTrouble extends UnimplementedCard {
  constructor (game) {
    super(game, "Toil // Trouble", "Dragon's Maze", "DGM");
  }
}

module.exports = ToilTrouble;
