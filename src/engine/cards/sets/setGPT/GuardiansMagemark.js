"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardiansMagemark extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian's Magemark", "Guildpact", "GPT");
  }
}

module.exports = GuardiansMagemark;
