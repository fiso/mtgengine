"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaggerbackBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Daggerback Basilisk", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = DaggerbackBasilisk;
