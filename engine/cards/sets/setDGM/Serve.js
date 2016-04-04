"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Serve extends Card {
  constructor(game) {
    super(game, "Serve", "Dragon's Maze", "DGM");
  }
}

module.exports = Serve;
