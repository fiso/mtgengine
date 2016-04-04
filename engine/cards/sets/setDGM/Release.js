"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Release extends Card {
  constructor(game) {
    super(game, "Release", "Dragon's Maze", "DGM");
  }
}

module.exports = Release;
