"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieScavengers extends Card {
  constructor(game) {
    super(game, "Zombie Scavengers", "Weatherlight", "WTH");
  }
}

module.exports = ZombieScavengers;
