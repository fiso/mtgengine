"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherflameWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Aetherflame Wall", "Time Spiral", "TSP");
  }
}

module.exports = AetherflameWall;
