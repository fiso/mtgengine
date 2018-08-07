"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicCrush extends UnimplementedCard {
  constructor (game) {
    super(game, "Relic Crush", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = RelicCrush;
