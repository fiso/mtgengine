"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherflameWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Ætherflame Wall", "Time Spiral", "TSP");
  }
}

module.exports = AetherflameWall;
