"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanGorge extends UnimplementedCard {
  constructor (game) {
    super(game, "Shivan Gorge", "From the Vault: Realms", "V12");
  }
}

module.exports = ShivanGorge;
