"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulturousZombie extends UnimplementedCard {
  constructor(game) {
    super(game, "Vulturous Zombie", "Commander 2015", "C15");
  }
}

module.exports = VulturousZombie;
