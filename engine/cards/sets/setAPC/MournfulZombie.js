"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MournfulZombie extends Card {
  constructor(game) {
    super(game, "Mournful Zombie", "Apocalypse", "APC");
  }
}

module.exports = MournfulZombie;
