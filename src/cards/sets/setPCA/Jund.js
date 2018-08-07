"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jund extends UnimplementedCard {
  constructor (game) {
    super(game, "Jund", "Planechase Anthology", "PCA");
  }
}

module.exports = Jund;
