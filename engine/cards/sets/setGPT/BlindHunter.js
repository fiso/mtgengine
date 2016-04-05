"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Blind Hunter", "Guildpact", "GPT");
  }
}

module.exports = BlindHunter;
