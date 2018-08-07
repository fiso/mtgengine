"use strict";
const Constants = require ("../../../Constants");
const VulturousZombieBase = require("../setCM2/VulturousZombie");

class VulturousZombie extends VulturousZombieBase {
  constructor (game) {
    super(game, "Vulturous Zombie", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VulturousZombie;
