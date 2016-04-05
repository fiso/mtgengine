"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RotFarmSkeleton extends UnimplementedCard {
  constructor(game) {
    super(game, "Rot Farm Skeleton", "Dragon's Maze", "DGM");
  }
}

module.exports = RotFarmSkeleton;
