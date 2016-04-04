"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakdosCluestone extends Card {
  constructor(game) {
    super(game, "Rakdos Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = RakdosCluestone;
