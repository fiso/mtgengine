"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HissingMiasma extends UnimplementedCard {
  constructor (game) {
    super(game, "Hissing Miasma", "Guildpact", "GPT");
  }
}

module.exports = HissingMiasma;
