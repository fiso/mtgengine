"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggRaider extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Raider", "Anthologies", "ATH");
  }
}

module.exports = MoggRaider;
