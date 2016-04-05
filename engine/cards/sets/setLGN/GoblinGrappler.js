"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGrappler extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Grappler", "Legions", "LGN");
  }
}

module.exports = GoblinGrappler;
