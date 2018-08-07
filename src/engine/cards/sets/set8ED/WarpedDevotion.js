"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpedDevotion extends UnimplementedCard {
  constructor (game) {
    super(game, "Warped Devotion", "Eighth Edition", "8ED");
  }
}

module.exports = WarpedDevotion;
