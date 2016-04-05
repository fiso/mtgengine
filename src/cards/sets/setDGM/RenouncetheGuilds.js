"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenouncetheGuilds extends UnimplementedCard {
  constructor(game) {
    super(game, "Renounce the Guilds", "Dragon's Maze", "DGM");
  }
}

module.exports = RenouncetheGuilds;
