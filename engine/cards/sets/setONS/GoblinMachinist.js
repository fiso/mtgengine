"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinMachinist extends Card {
  constructor(game) {
    super(game, "Goblin Machinist", "Onslaught", "ONS");
  }
}

module.exports = GoblinMachinist;
