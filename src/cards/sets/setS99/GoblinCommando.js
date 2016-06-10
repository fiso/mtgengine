"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCommando extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Commando", "Starter 1999", "S99");
  }
}

module.exports = GoblinCommando;
