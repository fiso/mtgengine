"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrudgeSkeletons extends UnimplementedCard {
  constructor (game) {
    super(game, "Drudge Skeletons", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DrudgeSkeletons;
