"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishBard extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Bard", "Ninth Edition", "9ED");
  }
}

module.exports = ElvishBard;
