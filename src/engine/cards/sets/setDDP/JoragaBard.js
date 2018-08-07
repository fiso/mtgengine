"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoragaBard extends UnimplementedCard {
  constructor (game) {
    super(game, "Joraga Bard", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = JoragaBard;
