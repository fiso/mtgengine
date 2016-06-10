"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnawingZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Gnawing Zombie", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GnawingZombie;
