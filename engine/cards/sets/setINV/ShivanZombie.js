"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanZombie extends Card {
  constructor(game) {
    super(game, "Shivan Zombie", "Invasion", "INV");
  }
}

module.exports = ShivanZombie;
