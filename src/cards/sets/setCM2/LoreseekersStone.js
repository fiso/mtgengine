"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoreseekersStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Loreseeker's Stone", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = LoreseekersStone;
