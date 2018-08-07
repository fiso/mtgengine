"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellionEruption extends UnimplementedCard {
  constructor (game) {
    super(game, "Hellion Eruption", "Planechase Anthology", "PCA");
  }
}

module.exports = HellionEruption;
