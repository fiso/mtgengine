"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WolfbriarElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Wolfbriar Elemental", "Commander Anthology", "CMA");
  }
}

module.exports = WolfbriarElemental;
