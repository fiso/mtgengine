"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralAnimist extends UnimplementedCard {
  constructor (game) {
    super(game, "Feral Animist", "Dragon's Maze", "DGM");
  }
}

module.exports = FeralAnimist;
