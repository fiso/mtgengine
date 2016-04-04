"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GroundRift extends UnimplementedCard {
  constructor(game) {
    super(game, "Ground Rift", "Time Spiral", "TSP");
  }
}

module.exports = GroundRift;
