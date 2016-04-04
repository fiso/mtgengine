"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinDiplomats extends Card {
  constructor(game) {
    super(game, "Goblin Diplomats", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GoblinDiplomats;
