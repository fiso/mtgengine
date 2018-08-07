"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrokinHighGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Trokin High Guard", "Portal Second Age", "P02");
  }
}

module.exports = TrokinHighGuard;
