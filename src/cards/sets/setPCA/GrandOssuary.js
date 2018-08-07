"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrandOssuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Grand Ossuary", "Planechase Anthology", "PCA");
  }
}

module.exports = GrandOssuary;
