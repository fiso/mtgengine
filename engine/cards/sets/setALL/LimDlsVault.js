"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LimDlsVault extends Card {
  constructor(game) {
    super(game, "Lim-Dûl's Vault", "Alliances", "ALL");
  }
}

module.exports = LimDlsVault;
