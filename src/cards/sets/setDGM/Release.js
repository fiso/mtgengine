"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Release extends UnimplementedCard {
  constructor (game) {
    super(game, "Release", "Dragon's Maze", "DGM");
  }
}

module.exports = Release;
