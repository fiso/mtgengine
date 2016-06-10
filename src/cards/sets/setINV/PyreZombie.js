"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyreZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyre Zombie", "Invasion", "INV");
  }
}

module.exports = PyreZombie;
