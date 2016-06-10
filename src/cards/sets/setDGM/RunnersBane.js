"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunnersBane extends UnimplementedCard {
  constructor (game) {
    super(game, "Runner's Bane", "Dragon's Maze", "DGM");
  }
}

module.exports = RunnersBane;
