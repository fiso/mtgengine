"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaelstromWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Maelstrom Wanderer", "Planechase Anthology", "PCA");
  }
}

module.exports = MaelstromWanderer;
