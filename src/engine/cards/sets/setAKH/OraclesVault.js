"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OraclesVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Oracle's Vault", "Amonkhet", "AKH");
  }
}

module.exports = OraclesVault;
