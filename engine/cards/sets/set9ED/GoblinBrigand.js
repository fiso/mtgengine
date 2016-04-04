"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinBrigand extends Card {
  constructor(game) {
    super(game, "Goblin Brigand", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinBrigand;
