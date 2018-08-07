"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkDepths extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Depths", "From the Vault: Lore", "V16");
  }
}

module.exports = DarkDepths;
