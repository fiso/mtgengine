"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoreWeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Lore Weaver", "Battlebond Promos", "PBBD");
  }
}

module.exports = LoreWeaver;
