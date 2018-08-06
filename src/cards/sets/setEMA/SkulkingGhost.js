"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkulkingGhost extends UnimplementedCard {
  constructor (game) {
    super(game, "Skulking Ghost", "Eternal Masters", "EMA");
  }
}

module.exports = SkulkingGhost;
