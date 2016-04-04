"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinRoughrider extends Card {
  constructor(game) {
    super(game, "Goblin Roughrider", "Magic 2015 Core Set", "M15");
  }
}

module.exports = GoblinRoughrider;
