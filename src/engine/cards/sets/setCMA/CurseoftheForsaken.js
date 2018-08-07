"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseoftheForsaken extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of the Forsaken", "Commander Anthology", "CMA");
  }
}

module.exports = CurseoftheForsaken;
