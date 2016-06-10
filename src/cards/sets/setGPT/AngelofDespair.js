"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofDespair extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Despair", "Guildpact", "GPT");
  }
}

module.exports = AngelofDespair;
