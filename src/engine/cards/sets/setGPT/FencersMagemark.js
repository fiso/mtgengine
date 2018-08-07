"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FencersMagemark extends UnimplementedCard {
  constructor (game) {
    super(game, "Fencer's Magemark", "Guildpact", "GPT");
  }
}

module.exports = FencersMagemark;
