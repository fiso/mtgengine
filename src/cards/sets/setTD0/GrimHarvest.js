"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Harvest", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = GrimHarvest;
