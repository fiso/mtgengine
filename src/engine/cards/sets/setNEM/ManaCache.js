"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaCache extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Cache", "Nemesis", "NEM");
  }
}

module.exports = ManaCache;
