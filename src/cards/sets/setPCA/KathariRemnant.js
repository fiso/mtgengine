"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KathariRemnant extends UnimplementedCard {
  constructor (game) {
    super(game, "Kathari Remnant", "Planechase Anthology", "PCA");
  }
}

module.exports = KathariRemnant;
