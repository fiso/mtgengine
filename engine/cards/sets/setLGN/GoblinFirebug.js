"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinFirebug extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Firebug", "Legions", "LGN");
  }
}

module.exports = GoblinFirebug;
