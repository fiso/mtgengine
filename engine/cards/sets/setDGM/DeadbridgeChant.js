"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadbridgeChant extends Card {
  constructor(game) {
    super(game, "Deadbridge Chant", "Dragon's Maze", "DGM");
  }
}

module.exports = DeadbridgeChant;
