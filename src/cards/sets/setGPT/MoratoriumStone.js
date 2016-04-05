"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoratoriumStone extends UnimplementedCard {
  constructor(game) {
    super(game, "Moratorium Stone", "Guildpact", "GPT");
  }
}

module.exports = MoratoriumStone;
