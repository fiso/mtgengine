"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VulturousZombieBase = require("../setC15/VulturousZombie.js");

class VulturousZombie extends VulturousZombieBase {
  constructor(game) {
    super(game, "Vulturous Zombie", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VulturousZombie;
