"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptainsHook extends UnimplementedCard {
  constructor (game) {
    super(game, "Captain's Hook", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = CaptainsHook;
