"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lumberknot extends UnimplementedCard {
  constructor (game) {
    super(game, "Lumberknot", "Planechase Anthology", "PCA");
  }
}

module.exports = Lumberknot;
