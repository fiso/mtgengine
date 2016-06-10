"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BottomlessVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Bottomless Vault", "Fallen Empires", "FEM");
  }
}

module.exports = BottomlessVault;
