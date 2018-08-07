"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EliteVanguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Elite Vanguard", "Eternal Masters", "EMA");
  }
}

module.exports = EliteVanguard;
