"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Armed extends UnimplementedCard {
  constructor (game) {
    super(game, "Armed", "Dragon's Maze", "DGM");
  }
}

module.exports = Armed;
