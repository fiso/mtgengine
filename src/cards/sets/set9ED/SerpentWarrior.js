"use strict";
const Constants = require ("../../../Constants");
const SerpentWarriorBase = require("../setTPR/SerpentWarrior");

class SerpentWarrior extends SerpentWarriorBase {
  constructor (game) {
    super(game, "Serpent Warrior", "Ninth Edition", "9ED");
  }
}

module.exports = SerpentWarrior;
