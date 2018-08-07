"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianProcessor extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Processor", "From the Vault: Lore", "V16");
  }
}

module.exports = PhyrexianProcessor;
