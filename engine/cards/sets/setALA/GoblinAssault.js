"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinAssault extends Card {
  constructor(game) {
    super(game, "Goblin Assault", "Shards of Alara", "ALA");
  }
}

module.exports = GoblinAssault;
