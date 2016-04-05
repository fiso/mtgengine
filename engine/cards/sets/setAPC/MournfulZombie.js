"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MournfulZombie extends UnimplementedCard {
  constructor(game) {
    super(game, "Mournful Zombie", "Apocalypse", "APC");
  }
}

module.exports = MournfulZombie;
