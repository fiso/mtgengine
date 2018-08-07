"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziTemple extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi Temple", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = EldraziTemple;
