"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMime extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Mime", "Unhinged", "UNH");
  }
}

module.exports = GoblinMime;
