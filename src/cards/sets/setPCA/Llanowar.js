"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Llanowar extends UnimplementedCard {
  constructor (game) {
    super(game, "Llanowar", "Planechase Anthology", "PCA");
  }
}

module.exports = Llanowar;
