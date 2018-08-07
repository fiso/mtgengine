"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Horror", "Dragons of Tarkir Tokens", "TDTK");
  }
}

module.exports = ZombieHorror;
