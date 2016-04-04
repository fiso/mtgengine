"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhipstitchedZombie extends Card {
  constructor(game) {
    super(game, "Whipstitched Zombie", "Prophecy", "PCY");
  }
}

module.exports = WhipstitchedZombie;
