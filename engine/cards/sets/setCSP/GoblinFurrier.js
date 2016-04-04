"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinFurrier extends Card {
  constructor(game) {
    super(game, "Goblin Furrier", "Coldsnap", "CSP");
  }
}

module.exports = GoblinFurrier;
