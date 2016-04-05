"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SageAven extends UnimplementedCard {
  constructor(game) {
    super(game, "Sage Aven", "Ninth Edition", "9ED");
  }
}

module.exports = SageAven;
