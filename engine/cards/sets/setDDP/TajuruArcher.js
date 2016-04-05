"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TajuruArcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Tajuru Archer", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = TajuruArcher;
