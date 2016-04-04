"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RunnersBane extends Card {
  constructor(game) {
    super(game, "Runner's Bane", "Dragon's Maze", "DGM");
  }
}

module.exports = RunnersBane;
