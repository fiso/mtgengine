"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestorethePeace extends UnimplementedCard {
  constructor(game) {
    super(game, "Restore the Peace", "Dragon's Maze", "DGM");
  }
}

module.exports = RestorethePeace;
