"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorosBattleshaper extends Card {
  constructor(game) {
    super(game, "Boros Battleshaper", "Dragon's Maze", "DGM");
  }
}

module.exports = BorosBattleshaper;
