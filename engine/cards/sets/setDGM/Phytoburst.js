"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Phytoburst extends Card {
  constructor(game) {
    super(game, "Phytoburst", "Dragon's Maze", "DGM");
  }
}

module.exports = Phytoburst;
