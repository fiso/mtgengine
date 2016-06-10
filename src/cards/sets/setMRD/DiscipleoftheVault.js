"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleoftheVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Disciple of the Vault", "Mirrodin", "MRD");
  }
}

module.exports = DiscipleoftheVault;
