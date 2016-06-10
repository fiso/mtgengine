"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Call extends UnimplementedCard {
  constructor (game) {
    super(game, "Call", "Dragon's Maze", "DGM");
  }
}

module.exports = Call;
