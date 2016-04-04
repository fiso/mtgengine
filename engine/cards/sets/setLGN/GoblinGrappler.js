"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGrappler extends Card {
  constructor(game) {
    super(game, "Goblin Grappler", "Legions", "LGN");
  }
}

module.exports = GoblinGrappler;
