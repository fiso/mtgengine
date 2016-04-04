"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieApocalypse extends Card {
  constructor(game) {
    super(game, "Zombie Apocalypse", "Dark Ascension", "DKA");
  }
}

module.exports = ZombieApocalypse;
