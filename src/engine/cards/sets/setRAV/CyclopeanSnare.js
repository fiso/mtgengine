"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CyclopeanSnare extends UnimplementedCard {
  constructor (game) {
    super(game, "Cyclopean Snare", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CyclopeanSnare;
