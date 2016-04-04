"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlockofRabidSheep extends Card {
  constructor(game) {
    super(game, "Flock of Rabid Sheep", "Unglued", "UGL");
  }
}

module.exports = FlockofRabidSheep;
