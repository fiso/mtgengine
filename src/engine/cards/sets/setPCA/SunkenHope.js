"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunkenHope extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunken Hope", "Planechase Anthology", "PCA");
  }
}

module.exports = SunkenHope;
