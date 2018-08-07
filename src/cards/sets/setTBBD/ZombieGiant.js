"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Giant", "Battlebond Tokens", "TBBD");
  }
}

module.exports = ZombieGiant;
