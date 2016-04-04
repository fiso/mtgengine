"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerpentWarriorBase = require("../set8ED/SerpentWarrior.js");

class SerpentWarrior extends SerpentWarriorBase {
  constructor(game) {
    super(game, "Serpent Warrior", "Stronghold", "STH");
  }
}

module.exports = SerpentWarrior;
