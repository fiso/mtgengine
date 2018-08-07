"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unmask extends UnimplementedCard {
  constructor (game) {
    super(game, "Unmask", "From the Vault: Lore", "V16");
  }
}

module.exports = Unmask;
