"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oust extends UnimplementedCard {
  constructor(game) {
    super(game, "Oust", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Oust;
