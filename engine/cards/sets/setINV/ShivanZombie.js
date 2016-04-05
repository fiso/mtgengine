"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanZombie extends UnimplementedCard {
  constructor(game) {
    super(game, "Shivan Zombie", "Invasion", "INV");
  }
}

module.exports = ShivanZombie;
