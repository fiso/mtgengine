"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plant extends UnimplementedCard {
  constructor (game) {
    super(game, "Plant", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Plant;
