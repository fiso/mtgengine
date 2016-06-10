"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScuteMob extends UnimplementedCard {
  constructor (game) {
    super(game, "Scute Mob", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ScuteMob;
