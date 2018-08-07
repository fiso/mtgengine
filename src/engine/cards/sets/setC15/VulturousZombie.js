"use strict";
const Constants = require ("../../../Constants");
const VulturousZombieBase = require("../setCM2/VulturousZombie");

class VulturousZombie extends VulturousZombieBase {
  constructor (game) {
    super(game, "Vulturous Zombie", "Commander 2015", "C15");
  }
}

module.exports = VulturousZombie;
