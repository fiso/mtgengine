"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlockofRabidSheep extends UnimplementedCard {
  constructor(game) {
    super(game, "Flock of Rabid Sheep", "Unglued", "UGL");
  }
}

module.exports = FlockofRabidSheep;
