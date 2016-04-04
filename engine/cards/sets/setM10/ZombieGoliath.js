"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieGoliath extends Card {
  constructor(game) {
    super(game, "Zombie Goliath", "Magic 2010", "M10");
  }
}

module.exports = ZombieGoliath;
