"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinRingleader extends Card {
  constructor(game) {
    super(game, "Goblin Ringleader", "Apocalypse", "APC");
  }
}

module.exports = GoblinRingleader;
