"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiotPiker extends UnimplementedCard {
  constructor(game) {
    super(game, "Riot Piker", "Dragon's Maze", "DGM");
  }
}

module.exports = RiotPiker;
