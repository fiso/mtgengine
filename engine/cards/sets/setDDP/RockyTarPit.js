"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockyTarPit extends UnimplementedCard {
  constructor(game) {
    super(game, "Rocky Tar Pit", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = RockyTarPit;
