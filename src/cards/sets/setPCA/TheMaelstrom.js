"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheMaelstrom extends UnimplementedCard {
  constructor (game) {
    super(game, "The Maelstrom", "Planechase Anthology", "PCA");
  }
}

module.exports = TheMaelstrom;
