"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElfhameSanctuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Elfhame Sanctuary", "Invasion", "INV");
  }
}

module.exports = ElfhameSanctuary;
