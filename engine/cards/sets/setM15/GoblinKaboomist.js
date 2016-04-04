"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinKaboomist extends Card {
  constructor(game) {
    super(game, "Goblin Kaboomist", "Magic 2015 Core Set", "M15");
  }
}

module.exports = GoblinKaboomist;
