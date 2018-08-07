"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Takenuma extends UnimplementedCard {
  constructor (game) {
    super(game, "Takenuma", "Planechase Anthology", "PCA");
  }
}

module.exports = Takenuma;
