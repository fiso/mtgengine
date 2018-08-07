"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnawingZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Gnawing Zombie", "Modern Masters 2017", "MM3");
  }
}

module.exports = GnawingZombie;
