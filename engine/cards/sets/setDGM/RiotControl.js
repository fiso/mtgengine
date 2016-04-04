"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiotControl extends Card {
  constructor(game) {
    super(game, "Riot Control", "Dragon's Maze", "DGM");
  }
}

module.exports = RiotControl;
