"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlissatheTraitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Glissa, the Traitor", "From the Vault: Lore", "V16");
  }
}

module.exports = GlissatheTraitor;
