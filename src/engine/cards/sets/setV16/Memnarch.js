"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Memnarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Memnarch", "From the Vault: Lore", "V16");
  }
}

module.exports = Memnarch;
