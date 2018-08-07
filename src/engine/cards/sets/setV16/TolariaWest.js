"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TolariaWest extends UnimplementedCard {
  constructor (game) {
    super(game, "Tolaria West", "From the Vault: Lore", "V16");
  }
}

module.exports = TolariaWest;
