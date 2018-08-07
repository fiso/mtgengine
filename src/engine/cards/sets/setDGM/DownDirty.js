"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DownDirty extends UnimplementedCard {
  constructor (game) {
    super(game, "Down // Dirty", "Dragon's Maze", "DGM");
  }
}

module.exports = DownDirty;
