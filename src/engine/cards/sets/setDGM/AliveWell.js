"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AliveWell extends UnimplementedCard {
  constructor (game) {
    super(game, "Alive // Well", "Dragon's Maze", "DGM");
  }
}

module.exports = AliveWell;
