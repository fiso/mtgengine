"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasSpecter extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana's Specter", "Planechase Anthology", "PCA");
  }
}

module.exports = LilianasSpecter;
