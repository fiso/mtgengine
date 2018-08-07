"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Obliterate extends UnimplementedCard {
  constructor (game) {
    super(game, "Obliterate", "From the Vault: Lore", "V16");
  }
}

module.exports = Obliterate;
