"use strict";
const Constants = require ("../../../Constants");
const VulturousZombieBase = require("../setCM2/VulturousZombie");

class VulturousZombie extends VulturousZombieBase {
  constructor (game) {
    super(game, "Vulturous Zombie", "Commander Anthology", "CMA");
  }
}

module.exports = VulturousZombie;
