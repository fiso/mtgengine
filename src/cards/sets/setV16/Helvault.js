"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Helvault extends UnimplementedCard {
  constructor (game) {
    super(game, "Helvault", "From the Vault: Lore", "V16");
  }
}

module.exports = Helvault;
