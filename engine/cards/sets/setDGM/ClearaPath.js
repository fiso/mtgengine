"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClearaPath extends UnimplementedCard {
  constructor(game) {
    super(game, "Clear a Path", "Dragon's Maze", "DGM");
  }
}

module.exports = ClearaPath;
