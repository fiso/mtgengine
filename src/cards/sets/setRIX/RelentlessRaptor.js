"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelentlessRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Relentless Raptor", "Rivals of Ixalan", "RIX");
  }
}

module.exports = RelentlessRaptor;
