"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastmastersMagemark extends UnimplementedCard {
  constructor(game) {
    super(game, "Beastmaster's Magemark", "Guildpact", "GPT");
  }
}

module.exports = BeastmastersMagemark;
