"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Lava Zombie", "Planeshift", "PLS");
  }
}

module.exports = LavaZombie;
