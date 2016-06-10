"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraypeltHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Graypelt Hunter", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = GraypeltHunter;
