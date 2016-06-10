"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziSpawn extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi Spawn", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = EldraziSpawn;
