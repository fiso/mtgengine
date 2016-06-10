"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraftedSkullcap extends UnimplementedCard {
  constructor (game) {
    super(game, "Grafted Skullcap", "Seventh Edition", "7ED");
  }
}

module.exports = GraftedSkullcap;
