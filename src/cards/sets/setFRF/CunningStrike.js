"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Cunning Strike", "Fate Reforged", "FRF");
  }
}

module.exports = CunningStrike;
