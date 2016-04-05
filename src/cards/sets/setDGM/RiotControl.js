"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiotControl extends UnimplementedCard {
  constructor(game) {
    super(game, "Riot Control", "Dragon's Maze", "DGM");
  }
}

module.exports = RiotControl;
