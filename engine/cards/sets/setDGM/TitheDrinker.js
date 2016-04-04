"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitheDrinker extends Card {
  constructor(game) {
    super(game, "Tithe Drinker", "Dragon's Maze", "DGM");
  }
}

module.exports = TitheDrinker;
