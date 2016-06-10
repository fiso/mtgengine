"use strict";
const Constants = require ("../../../Constants");
const VulturousZombieBase = require("../setC15/VulturousZombie");

class VulturousZombie extends VulturousZombieBase {
  constructor (game) {
    super(game, "Vulturous Zombie", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VulturousZombie;
