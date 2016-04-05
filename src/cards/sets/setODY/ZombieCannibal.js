"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieCannibal extends UnimplementedCard {
  constructor(game) {
    super(game, "Zombie Cannibal", "Odyssey", "ODY");
  }
}

module.exports = ZombieCannibal;
