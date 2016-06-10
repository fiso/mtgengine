"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMime extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Mime", "Arena League", "pARL");
  }
}

module.exports = GoblinMime;
