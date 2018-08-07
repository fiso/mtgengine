"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VaultofWhispers extends UnimplementedCard {
  constructor (game) {
    super(game, "Vault of Whispers", "Planechase", "HOP");
  }
}

module.exports = VaultofWhispers;
