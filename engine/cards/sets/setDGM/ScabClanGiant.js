"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScabClanGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Scab-Clan Giant", "Dragon's Maze", "DGM");
  }
}

module.exports = ScabClanGiant;
