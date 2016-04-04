"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinCavaliers extends Card {
  constructor(game) {
    super(game, "Goblin Cavaliers", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinCavaliers;
