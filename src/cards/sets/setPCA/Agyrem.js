"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Agyrem extends UnimplementedCard {
  constructor (game) {
    super(game, "Agyrem", "Planechase Anthology", "PCA");
  }
}

module.exports = Agyrem;
