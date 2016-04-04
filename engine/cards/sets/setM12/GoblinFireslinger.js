"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinFireslinger extends Card {
  constructor(game) {
    super(game, "Goblin Fireslinger", "Magic 2012", "M12");
  }
}

module.exports = GoblinFireslinger;
