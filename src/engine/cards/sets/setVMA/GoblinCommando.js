"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCommando extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Commando", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinCommando;
