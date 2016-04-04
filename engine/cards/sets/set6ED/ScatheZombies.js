"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScatheZombies extends Card {
  constructor(game) {
    super(game, "Scathe Zombies", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ScatheZombies;
