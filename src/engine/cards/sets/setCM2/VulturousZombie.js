"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulturousZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Vulturous Zombie", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = VulturousZombie;
