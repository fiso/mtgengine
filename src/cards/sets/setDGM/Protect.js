"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Protect extends UnimplementedCard {
  constructor (game) {
    super(game, "Protect", "Dragon's Maze", "DGM");
  }
}

module.exports = Protect;
