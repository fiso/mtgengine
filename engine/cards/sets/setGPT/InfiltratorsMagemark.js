"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfiltratorsMagemark extends UnimplementedCard {
  constructor(game) {
    super(game, "Infiltrator's Magemark", "Guildpact", "GPT");
  }
}

module.exports = InfiltratorsMagemark;
