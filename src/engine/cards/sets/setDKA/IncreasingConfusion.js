"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncreasingConfusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Increasing Confusion", "Dark Ascension", "DKA");
  }
}

module.exports = IncreasingConfusion;
