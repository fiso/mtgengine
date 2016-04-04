"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeralAnimist extends Card {
  constructor(game) {
    super(game, "Feral Animist", "Dragon's Maze", "DGM");
  }
}

module.exports = FeralAnimist;
