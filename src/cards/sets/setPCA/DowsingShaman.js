"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DowsingShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Dowsing Shaman", "Planechase Anthology", "PCA");
  }
}

module.exports = DowsingShaman;
