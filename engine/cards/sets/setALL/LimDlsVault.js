"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDlsVault extends UnimplementedCard {
  constructor(game) {
    super(game, "Lim-Dûl's Vault", "Alliances", "ALL");
  }
}

module.exports = LimDlsVault;
