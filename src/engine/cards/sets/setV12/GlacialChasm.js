"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialChasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Glacial Chasm", "From the Vault: Realms", "V12");
  }
}

module.exports = GlacialChasm;
