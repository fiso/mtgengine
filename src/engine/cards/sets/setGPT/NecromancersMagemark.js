"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecromancersMagemark extends UnimplementedCard {
  constructor (game) {
    super(game, "Necromancer's Magemark", "Guildpact", "GPT");
  }
}

module.exports = NecromancersMagemark;
