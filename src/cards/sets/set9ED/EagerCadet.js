"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EagerCadet extends UnimplementedCard {
  constructor (game) {
    super(game, "Eager Cadet", "Ninth Edition", "9ED");
  }
}

module.exports = EagerCadet;
