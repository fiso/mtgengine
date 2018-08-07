"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleBasin extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Basin", "Commander Anthology", "CMA");
  }
}

module.exports = JungleBasin;
