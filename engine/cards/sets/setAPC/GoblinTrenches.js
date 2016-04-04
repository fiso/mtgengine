"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinTrenches extends Card {
  constructor(game) {
    super(game, "Goblin Trenches", "Apocalypse", "APC");
  }
}

module.exports = GoblinTrenches;
