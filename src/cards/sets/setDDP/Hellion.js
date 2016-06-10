"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hellion extends UnimplementedCard {
  constructor (game) {
    super(game, "Hellion", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Hellion;
