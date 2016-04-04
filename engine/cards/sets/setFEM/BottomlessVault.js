"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BottomlessVault extends Card {
  constructor(game) {
    super(game, "Bottomless Vault", "Fallen Empires", "FEM");
  }
}

module.exports = BottomlessVault;
