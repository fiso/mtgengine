"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSpy extends Card {
  constructor(game) {
    super(game, "Goblin Spy", "Invasion", "INV");
  }
}

module.exports = GoblinSpy;
