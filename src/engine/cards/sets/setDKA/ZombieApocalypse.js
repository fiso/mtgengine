"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieApocalypse extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Apocalypse", "Dark Ascension", "DKA");
  }
}

module.exports = ZombieApocalypse;
