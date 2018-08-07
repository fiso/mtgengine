"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTunneler extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Tunneler", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinTunneler;
