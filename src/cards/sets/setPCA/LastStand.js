"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastStand extends UnimplementedCard {
  constructor (game) {
    super(game, "Last Stand", "Planechase Anthology", "PCA");
  }
}

module.exports = LastStand;
