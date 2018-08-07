"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tazeem extends UnimplementedCard {
  constructor (game) {
    super(game, "Tazeem", "Planechase Anthology", "PCA");
  }
}

module.exports = Tazeem;
