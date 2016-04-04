"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavaZombie extends Card {
  constructor(game) {
    super(game, "Lava Zombie", "Planeshift", "PLS");
  }
}

module.exports = LavaZombie;
