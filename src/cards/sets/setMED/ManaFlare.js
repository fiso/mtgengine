"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaFlare extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Flare", "Masters Edition", "MED");
  }
}

module.exports = ManaFlare;
