"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeyWeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Ley Weaver", "Battlebond Promos", "PBBD");
  }
}

module.exports = LeyWeaver;
