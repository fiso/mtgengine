"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Showstopper extends Card {
  constructor(game) {
    super(game, "Showstopper", "Dragon's Maze", "DGM");
  }
}

module.exports = Showstopper;
