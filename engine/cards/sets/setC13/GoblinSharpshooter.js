"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSharpshooter extends Card {
  constructor(game) {
    super(game, "Goblin Sharpshooter", "Commander 2013 Edition", "C13");
  }
}

module.exports = GoblinSharpshooter;
