"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalRitual extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Ritual", "From the Vault: Lore", "V16");
  }
}

module.exports = CabalRitual;
