"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "Divine Favor", "Magic 2015", "M15");
  }
}

module.exports = DivineFavor;
