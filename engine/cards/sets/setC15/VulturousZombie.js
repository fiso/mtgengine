"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VulturousZombie extends Card {
  constructor(game) {
    super(game, "Vulturous Zombie", "Commander 2015", "C15");
  }
}

module.exports = VulturousZombie;
