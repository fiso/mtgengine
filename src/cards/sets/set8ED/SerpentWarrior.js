"use strict";
const Constants = require ("../../../Constants");
const SerpentWarriorBase = require("../setTPR/SerpentWarrior");

class SerpentWarrior extends SerpentWarriorBase {
  constructor (game) {
    super(game, "Serpent Warrior", "Eighth Edition", "8ED");
  }
}

module.exports = SerpentWarrior;
