"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenouncetheGuilds extends Card {
  constructor(game) {
    super(game, "Renounce the Guilds", "Dragon's Maze", "DGM");
  }
}

module.exports = RenouncetheGuilds;
