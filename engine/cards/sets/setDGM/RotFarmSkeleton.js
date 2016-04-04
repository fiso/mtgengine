"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RotFarmSkeleton extends Card {
  constructor(game) {
    super(game, "Rot Farm Skeleton", "Dragon's Maze", "DGM");
  }
}

module.exports = RotFarmSkeleton;
