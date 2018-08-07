"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MolimoMaroSorcerer extends UnimplementedCard {
  constructor (game) {
    super(game, "Molimo, Maro-Sorcerer", "Archenemy", "ARC");
  }
}

module.exports = MolimoMaroSorcerer;
