"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleoftheVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Disciple of the Vault", "World Championship Decks 2004", "WC04");
  }
}

module.exports = DiscipleoftheVault;
