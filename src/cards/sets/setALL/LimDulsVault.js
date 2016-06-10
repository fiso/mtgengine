"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDulsVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Lim-Dûl's Vault", "Alliances", "ALL");
  }
}

module.exports = LimDulsVault;
