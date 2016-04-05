"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakindiGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Makindi Griffin", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = MakindiGriffin;
