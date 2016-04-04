"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiotPiker extends Card {
  constructor(game) {
    super(game, "Riot Piker", "Dragon's Maze", "DGM");
  }
}

module.exports = RiotPiker;
