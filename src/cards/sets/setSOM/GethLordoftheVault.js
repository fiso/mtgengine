"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GethLordoftheVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Geth, Lord of the Vault", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GethLordoftheVault;
