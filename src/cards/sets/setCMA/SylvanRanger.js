"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Ranger", "Commander Anthology", "CMA");
  }
}

module.exports = SylvanRanger;
