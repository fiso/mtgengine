"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Akoum extends UnimplementedCard {
  constructor (game) {
    super(game, "Akoum", "Planechase Anthology", "PCA");
  }
}

module.exports = Akoum;
