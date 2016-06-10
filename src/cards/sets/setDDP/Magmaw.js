"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Magmaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Magmaw", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Magmaw;
