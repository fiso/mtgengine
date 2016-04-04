"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterofCruelties extends Card {
  constructor(game) {
    super(game, "Master of Cruelties", "Dragon's Maze", "DGM");
  }
}

module.exports = MasterofCruelties;
