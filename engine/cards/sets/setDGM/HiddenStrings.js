"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenStrings extends Card {
  constructor(game) {
    super(game, "Hidden Strings", "Dragon's Maze", "DGM");
  }
}

module.exports = HiddenStrings;
