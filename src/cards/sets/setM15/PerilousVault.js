"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerilousVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Perilous Vault", "Magic 2015 Core Set", "M15");
  }
}

module.exports = PerilousVault;
