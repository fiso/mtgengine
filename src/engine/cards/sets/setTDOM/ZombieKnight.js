"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Knight", "Dominaria Tokens", "TDOM");
  }
}

module.exports = ZombieKnight;
