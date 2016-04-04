"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ætherling extends Card {
  constructor(game) {
    super(game, "Ætherling", "Dragon's Maze", "DGM");
  }
}

module.exports = Ætherling;
