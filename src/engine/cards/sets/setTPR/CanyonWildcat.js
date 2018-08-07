"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanyonWildcat extends UnimplementedCard {
  constructor (game) {
    super(game, "Canyon Wildcat", "Tempest Remastered", "TPR");
  }
}

module.exports = CanyonWildcat;
