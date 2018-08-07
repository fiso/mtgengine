"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NornsDominion extends UnimplementedCard {
  constructor (game) {
    super(game, "Norn's Dominion", "Planechase Anthology", "PCA");
  }
}

module.exports = NornsDominion;
