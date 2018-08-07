"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MitoticSlime extends UnimplementedCard {
  constructor (game) {
    super(game, "Mitotic Slime", "Planechase Anthology", "PCA");
  }
}

module.exports = MitoticSlime;
